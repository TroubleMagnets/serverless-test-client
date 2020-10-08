export default {
  MAX_ATTACHMENT_SIZE: 5000000,

  STRIPE_KEY: "pk_test_51HZPvSAi69rUKdGQ7KkRQV1Z5EKOPatbv5MuZnmpJfnGAE57ODqdDybqwMslVHian2tWKjIqBVQeyLDbPFXqF46n0049aQMtv4",

  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-api-prod-serverlessdeploymentbucket-1dqhbqrqgot60"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://dkc0rvzeuj.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_Q9q4ukI3T",
    APP_CLIENT_ID: "11h111b7ind9s74n54hhdksqej",
    IDENTITY_POOL_ID: "us-east-2:06442137-5bc3-4aff-9d14-a0293cd541d9"
  }
};
