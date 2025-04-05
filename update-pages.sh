#!/bin/bash

# This script creates Suspense wrappers for all pages that use useSearchParams()

# List of pages to update
PAGES=(
  "app/account/address/edit/page.tsx"
  "app/account/address/add/page.tsx"
  "app/forgot-password/page.tsx"
  "app/account/wishlist/page.tsx"
  "app/privacy/page.tsx"
  "app/support/page.tsx"
  "app/contact/page.tsx"
  "app/account/address/page.tsx"
  "app/page.tsx"
  "app/shipping/page.tsx"
  "app/sign-up/page.tsx"
  "app/terms/page.tsx"
  "app/categories/page.tsx"
  "app/returns/page.tsx"
  "app/cart/page.tsx"
  "app/account/orders/page.tsx"
  "app/checkout/page.tsx"
  "app/account/page.tsx"
  "app/faqs/page.tsx"
  "app/order-complete/page.tsx"
  "app/sign-in/page.tsx"
)

for page in "${PAGES[@]}"; do
  # Extract the directory and filename
  dir=$(dirname "$page")
  filename=$(basename "$page" .tsx)

  # Create the content component filename
  content_file="${dir}/${filename}-content.tsx"

  # Check if the page exists
  if [ -f "$page" ]; then
    echo "Processing $page..."

    # Create a backup of the original page
    cp "$page" "${page}.bak"

    # Move the content to the new content file
    cat "$page" > "$content_file"

    # Update the content file to use withSearchParams
    sed -i '1s/^/"use client"\n\n/' "$content_file"
    sed -i 's/export default function/function/' "$content_file"
    echo -e "\nimport { withSearchParams } from '@/components/with-search-params'\n\nexport default withSearchParams(${filename^}Content)" >> "$content_file"

    # Create the new page file with Suspense
    cat > "$page" << EOF
import { Suspense } from 'react'
import ${filename^}Content from './${filename}-content'

export default function ${filename^}Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <${filename^}Content />
    </Suspense>
  )
}
EOF

    echo "Created $content_file and updated $page"
  else
    echo "Warning: $page does not exist"
  fi
done

echo "Done updating pages"

