<script lang="ts">
    import { onMount } from "svelte";
    import { trendingProducts } from "../../store/product.store";

    let trendingProduct: any = [];
    let currentIndex = 0;
    let visibleProducts: any = [];

    const itemsPerPage = 3;

    const updateVisibleProducts = () => {
        visibleProducts = trendingProduct.slice(
            currentIndex,
            currentIndex + itemsPerPage
        );
        if (visibleProducts.length < itemsPerPage) {
            visibleProducts = visibleProducts.concat(
                trendingProduct.slice(0, itemsPerPage - visibleProducts.length)
            );
        }
    };

    const next = () => {
        currentIndex = (currentIndex + itemsPerPage) % trendingProduct.length;
        updateVisibleProducts();
    };

    const prev = () => {
        currentIndex =
            (currentIndex - itemsPerPage + trendingProduct.length) %
            trendingProduct.length;
        updateVisibleProducts();
    };

    trendingProducts.subscribe((value) => {
        trendingProduct = value;
        updateVisibleProducts();
    });

    onMount(() => {
        updateVisibleProducts();
    });
</script>

<div class="flex flex-col justify-center items-center py-10">
    <div class="flex gap-2 items-center w-full">
        <button
            on:click={next}
            class="h-10 w-10 mx-2 font-extrabold bg-gray-200 rounded-full hover:bg-gray-300"
        >
            &lt;
        </button>
        <div class="flex justify-evenly w-full">
            {#each visibleProducts as product}
                <div class="flex flex-col items-center gap-3 cursor-pointer">
                    <img class="h-96" alt={product.name} src={product.img} />
                    <p class="text-xs text-gray-500 capitalize w-80">
                        {product.name}
                    </p>
                </div>
            {/each}
        </div>
        <button on:click={next} class="h-10 w-10 mx-2 font-extrabold bg-gray-200 rounded-full hover:bg-gray-300">
            &gt;
        </button>
    </div>
</div>
