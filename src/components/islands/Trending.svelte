<script lang="ts">
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { getProducts } from "../../services/product.service";
    import { trendingProducts } from "../../store/product.store";
    import TrendingCarousel from "./TrendingCarousel.svelte";

    const loading = writable(true);

    onMount(async () => {
        try {
            const response: any = await getProducts();
            trendingProducts.set(response.data);
            console.log(response.data, "json");
        } catch (error) {
            console.error("Failed to fetch products:", error);
        } finally {
            loading.set(false);
        }
    });
</script>

<div class="flex flex-col">
    <div class="flex flex-col items-center justify-center gap-3 p-7">
        <h3 class="text-2xl font-semibold uppercase">
            trending on svelte store
        </h3>
        <p class="text-gray-500 text-sm text-center">
            list of trending products
            <br />
            <button class="w-20 h-7 my-2 uppercase text-xs font-semibold bg-blue-500 hover:bg-blue-600 text-white">view all</button>
        </p>
    </div>
    <div>
        {#if $loading}
            <div>Loading...</div>
        {:else}
            <TrendingCarousel />
        {/if}
    </div>
</div>
