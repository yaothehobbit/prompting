#!/bin/bash
set -e

PROJECT_ID="life-insurance-chatbot-485802"
echo "Deploying prompting guide to Cloud Run..."
gcloud builds submit --config cloudbuild.yaml --project ${PROJECT_ID}
echo "Deploy complete!"
echo "Service URL: https://prompting-dxgujk3n4a-uc.a.run.app/prompting/"
echo "Custom domain: https://www.rsfundmanagement.com/prompting/"
