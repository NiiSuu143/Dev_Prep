### ✅ Option 2: Hide scrollbar but keep scrolling

For cases where you want the element to still scroll but the scrollbar invisible, you’ll need a custom utility.

## Step 1: Add CSS in global.css
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE & Edge */
  scrollbar-width: none;     /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

## Step 2: Use in Tailwind
<div class="overflow-x-scroll scrollbar-hide">
  <!-- content -->
</div>