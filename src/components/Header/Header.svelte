<script>
  let src = '/svelte_logo.png?url';
</script>

<header>
  <nav
    class="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div class="flex lg:flex-1">
      <a href="/" class="-m-1.5 p-1.5 flex">
        <img class="h-10 w-auto mr-[0.1rem]" {src} alt="" /><span
          class="flex items-center gap-x-1 text-[2.5rem] font-semibold tracking-wide leading-8 text-white font-outline-2"
        >
          velte</span
        ><img class="h-10 w-auto mr-[0.1rem]" {src} alt="" /><span
          class="flex items-center gap-x-1 text-[2.5rem] font-semibold tracking-wide leading-8 text-white font-outline-2"
        >
          tore</span
        >
      </a>
    </div>
    <div class="flex lg:hidden">
      <button
        type="button"
        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
      <div class="relative">
        <button
          type="button"
          class="flex items-center gap-x-1 text-base font-semibold leading-6 text-gray-900"
          aria-expanded="false"
        >
          Product
          <svg
            class="h-5 w-5 flex-none text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <a href="features" class="text-base font-semibold leading-6 text-gray-900"
        >Features</a
      >
      <a
        href="marketplace"
        class="text-base font-semibold leading-6 text-gray-900">Marketplace</a
      >
      <a href="company" class="text-base font-semibold leading-6 text-gray-900"
        >Company</a
      >
    </div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="sign-up" class="text-base font-semibold leading-6 text-gray-900"
        >Log in <span aria-hidden="true">&rarr;</span></a
      >
    </div>
  </nav>
  <!-- Mobile menu, show/hide based on menu open state. -->
  <div class="lg:hidden" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-10" />
    <div
      class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" {src} alt="" />
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root" />
    </div>
  </div>
</header>

<style>
  .font-outline-2 {
    -webkit-text-stroke: 2px #ff4109;
  }
  .max-w-8xl {
    max-width: 85rem;
  }
</style>
