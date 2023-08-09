<script>
  export let totalPages;
  export let pageSize;
  export let currentPage;
</script>

<div class="inline-flex space-x-1 text-base font-medium p-10">
  {#each Array(totalPages) as _, idx}
    <a
      href="/search/products/{idx + 1}"
      class={currentPage === idx
        ? 'bg-emerald-300 inline-flex w-11 h-11 items-center justify-center rounded-full text-white'
        : 'inline-flex w-11 h-11 items-center justify-center rounded-full bg-red-600 text-white'}
    >
      {idx + 1}
    </a>
  {/each}
</div>
