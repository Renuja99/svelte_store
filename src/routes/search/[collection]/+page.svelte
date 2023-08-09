<script>
  import { page } from '$app/stores';
  import ProductCard from '$components/ProductCard.svelte';
  import SidebarFilters from '$components/SidebarFilters.svelte';
  import Pagination from '$components/Pagination.svelte';

  export let data;

  console.log(data);
</script>

<!-- <h1>Hi! I'm page {$page?.params?.collection}</h1> -->

<div class="mx-auto flex max-w-8xl items-center justify-between p-6 lg:px-8">
  <div
    class="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28"
  >
    <div class="space-y-10 lg:space-x-0">
      <!-- HEADING -->
      <div class="max-w-screen-sm">
        <h2 class="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Men's Collection
        </h2>
        <span
          class="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base"
        >
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like minded people.
        </span>
      </div>

      <hr class="border-slate-200 dark:border-slate-700" />
      <!-- SECONd category -->
      <main>
        <div class="flex flex-col lg:flex-row">
          <!-- SIDEBAR FILTERS -->
          <div class="lg:w-1/3 xl:w-1/4 pr-4">
            <SidebarFilters />
          </div>
          <div
            class="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"
          />

          <!-- PRODUCTS -->
          <div class="flex-1 flex flex-col">
            <div
              class="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10"
            >
              {#each data.products as product, i (product.id)}
                <ProductCard src={product.thumbnail} />
              {:else}
                <p>No products</p>
              {/each}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  </div>
</div>

<style>
  .max-w-8xl {
    max-width: 85rem;
  }
</style>
