#!/bin/bash
set -euo pipefail

COMPOSE_FILE="docker-compose.test.yml"
SERVICE_NAME="postgres-test"
CONTAINER_NAME="hc_test_postgres"

echo "Checking for running Postgres container"

RUNNING=$(docker ps --filter "name=${CONTAINER_NAME}" --filter "status=running" -q)

if [ -z "${RUNNING}"]; then
    echo "Starting ephemeral Postgres container..."
    docker compose -f docker-compose.test.yml up -d
    STARTED_CONTAINER=true
else
    echo "Existing Postgres test container detected. Reusing it."
    STARTED_CONTAINER=false
fi

echo "Waiting for Postgres to be ready..."
bash scripts/wait-for-db.sh

echo "Running Jest tests..."
npm run test:unit || TEST_EXIT=$?

if [ "${STARTED_CONTAINER}" = true ]; then
    echo "Tearing down Postgres container..."
    docker compose -f docker-compose.test.yml down -v   
else
    echo "Keep existing Postgres container running."
fi

exit ${TEST_EXIT:-0}