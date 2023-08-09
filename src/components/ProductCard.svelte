<script>
  export let src;
</script>

<div class="relative flex flex-col">
  <div class="relative flex-shrink-0 rounded-3xl overflow-hidden z-10 group">
    <div class="flex w-full justify-center">
      <img
        {src}
        alt="img description"
        class="object-contain h-56 drop-shadow-xl"
      />
    </div>
  </div>
</div>
