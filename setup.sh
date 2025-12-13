#!/bin/bash

# Clean installation script for e-commerce project

echo "🧹 Cleaning build artifacts and caches..."
rm -rf .next
rm -rf node_modules
rm -rf .yarn/cache
rm -rf dist
rm -f yarn.lock
rm -f package-lock.json

echo "📦 Installing fresh dependencies..."
yarn install

echo "✅ Installation complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   yarn dev"
echo ""
echo "📊 To check TypeScript types:"
echo "   yarn type-check"
echo ""
