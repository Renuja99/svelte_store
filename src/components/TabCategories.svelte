<script>
  import { goto } from '$app/navigation';
  const DATA_categories = [
    {
      id: 0,
      name: 'all-products',
    },
    {
      id: 1,
      name: 'smartphones',
    },
    {
      id: 2,
      name: 'laptops',
    },
    {
      id: 3,
      name: 'fragrances',
    },
    {
      id: 4,
      name: 'skincare',
    },
    {
      id: 5,
      name: 'groceries',
    },
    {
      id: 6,
      name: 'home-decoration',
    },
  ];

  function handleClick(event) {
    if (event.target.name != 'all-products') {
      console.log(event.target.name);
      goto(`/search/${event.target.name}`);
    } else {
      goto('/search');
    }
  }
</script>

<div class="relative flex flex-col pb-8 space-y-4">
  <h3 class="font-semibold mb-2.5">Categories</h3>
  {#each DATA_categories as category, i (category.id)}
    <div class="flex text-sm sm:text-base">
      <input
        id={category.name}
        name={category.name}
        class="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent dark:border-slate-700 focus:ring-purple-900 h-5 w-5"
        type="checkbox"
        on:click={handleClick}
      />
      <label
        for={category.name}
        class="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
      >
        <span class="text-slate-900">
          {category.name}
        </span>
      </label>
    </div>
  {/each}
</div>
