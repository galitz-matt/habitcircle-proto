#!/bin/bash
set -euo pipefail

COMPOSE_FILE="docker-compose.test.yml"
SERVICE_NAME="postgres-test"
CONTAINER_NAME="hc_test_postgres"
STARTED_CONTAINER=false

cleanup() {
  if [ "${STARTED_CONTAINER}" = true ]; then
    echo "Cleaning up: tearing down Postgres container..."
    docker compose -f "$COMPOSE_FILE" down -v || true
  else
    echo "Keeping existing Postgres container running."
  fi
}

# Ensure cleanup always runs, even if the script crashes or is interrupted
trap cleanup EXIT

echo "Checking for running Postgres container..."

RUNNING=$(docker ps --filter "name=${CONTAINER_NAME}" --filter "status=running" -q)

if [ -z "${RUNNING}" ]; then
  echo "Starting ephemeral Postgres container..."
  docker compose -f "$COMPOSE_FILE" up -d "$SERVICE_NAME"
  STARTED_CONTAINER=true
else
  echo "Existing Postgres test container detected. Reusing it."
fi

echo "Waiting for Postgres to be ready..."
bash ./wait-for-db.sh

echo "Running Jest integration tests..."
dotenv -e .env.test -- jest --config jest.integration.config.ts --runInBand
