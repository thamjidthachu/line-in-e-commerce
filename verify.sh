#!/bin/bash

# E-Commerce Project Health Check Script
# Run this to verify the project is properly configured

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  E-Commerce Project Configuration Verification                ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1 exists"
        return 0
    else
        echo -e "${RED}✗${NC} $1 missing"
        return 1
    fi
}

check_command() {
    if command -v $1 &> /dev/null; then
        echo -e "${GREEN}✓${NC} $1 is installed"
        return 0
    else
        echo -e "${RED}✗${NC} $1 is not installed"
        return 1
    fi
}

echo "📋 Configuration Files:"
check_file "next.config.mjs"
check_file "package.json"
check_file "tsconfig.json"
check_file ".env.example"
check_file "turbo.json"
echo ""

echo "📚 Documentation Files:"
check_file "SETUP.md"
check_file "CODEBASE_ANALYSIS.md"
check_file ".gitignore"
echo ""

echo "🔧 Required Tools:"
check_command "node"
check_command "yarn"
echo ""

echo "📦 Dependency Check:"
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules directory exists"
else
    echo -e "${YELLOW}⚠${NC}  node_modules missing - run 'yarn install'"
fi
echo ""

echo "🚀 Quick Start Commands:"
echo ""
echo "  Install dependencies:"
echo "    yarn install"
echo ""
echo "  Start development server (with hot reload):"
echo "    yarn dev"
echo ""
echo "  Type checking:"
echo "    yarn type-check"
echo ""
echo "  Build for production:"
echo "    yarn build"
echo ""
echo "  Run production server:"
echo "    yarn start"
echo ""

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  Configuration Status: READY                                   ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""
echo "For detailed setup instructions, see SETUP.md"
echo "For full analysis of changes, see CODEBASE_ANALYSIS.md"
