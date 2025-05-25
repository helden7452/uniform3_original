# Deploying to Netlify

This guide explains how to deploy this Next.js application to Netlify with the proper environment configuration.

## Prerequisites

1. A Netlify account
2. Git repository with this codebase

## Deployment Steps

### 1. Connect Repository to Netlify

1. Log in to your Netlify account
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Select the repository containing this Next.js project
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### 2. Environment Variables Setup

#### Method 1: Using Netlify Dashboard

Add the following environment variables in Netlify's dashboard under Site settings > Build & deploy > Environment:

```
# Public variables (will be included in the browser bundle)
NEXT_PUBLIC_SITE_URL=https://a5fi.com
NEXT_PUBLIC_SITE_NAME=خبراء الزي الموحد

# Site contact information (optional, for server components)
CONTACT_EMAIL=info@a5fi.com
CONTACT_PHONE=+966-12-345-6789
```

#### Method 2: Using Netlify CLI

1. Create a `.env.netlify` file in your project root with the following content:

```
NEXT_PUBLIC_SITE_URL=https://a5fi.com
NEXT_PUBLIC_SITE_NAME=خبراء الزي الموحد
CONTACT_EMAIL=info@a5fi.com
CONTACT_PHONE=+966-12-345-6789
```

2. Run the setup script to generate the Netlify CLI commands:

```bash
npm run netlify:setup-env
```

3. The script will output a series of `netlify env:set` commands. Run each command to set the environment variables in your Netlify site.

**Note:** Make sure you've linked your local project to your Netlify site using `netlify link` before running these commands.

#### Method 3: Manual .env File Creation

For complete control over your environment variables, you can:

1. Create the following files in your project root:
   - `.env.production` - For production environment variables
   - `.env.development` - For development environment variables

2. Add the following content to each file, adjusting values as needed:

```
# Public URL
NEXT_PUBLIC_SITE_URL=https://a5fi.com
NEXT_PUBLIC_SITE_NAME=خبراء الزي الموحد

# Contact information
CONTACT_EMAIL=info@a5fi.com
CONTACT_PHONE=+966-12-345-6789
```

3. Add these files to your `.gitignore` to keep sensitive information out of your repository.

4. When deploying to Netlify, you can use the CLI to upload these environment variables:

```bash
netlify env:import .env.production
```

### 3. Install the Next.js Plugin

The `@netlify/plugin-nextjs` has already been added as a dev dependency in the project. Netlify will automatically detect and use this plugin to optimize the Next.js deployment.

### 4. Additional Optimization

The `netlify.toml` file in this project includes:

- Optimized cache headers for static assets
- Security headers for enhanced protection
- Configuration for the Next.js plugin

### 5. Deploying Updates

After the initial setup, any new commits to the main branch will trigger automatic deployments.

### Troubleshooting

If you encounter any issues during deployment:

1. Check Netlify build logs for specific errors
2. Ensure all environment variables are correctly set
3. Verify that the `@netlify/plugin-nextjs` plugin is properly installed
4. Check for any path or routing issues in the Next.js application

## Local Testing Before Deployment

To test your build locally before deploying:

```bash
npm run build
npx netlify-cli dev
```

This will create a local build and run it using Netlify's development environment. 