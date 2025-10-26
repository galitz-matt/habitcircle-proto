set -e

echo "Waiting for Postgres (localhost:5433)..."
until pg_isready -h localhost -p 5433 -U test_user > /dev/null 2>&1; do
    sleep 0.5
done

echo "Postgres (localhost: 5433) is ready."