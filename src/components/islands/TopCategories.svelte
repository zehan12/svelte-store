<script>
    import { onMount } from "svelte";

    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "indigo",
        "violet",
        "hotpink",
        "purple",
        "amber"
    ];

    let currentIndex = 0;
    let visibleColors = [""];

    const itemsPerPage = 9;

    const updateVisibleColors = () => {
        visibleColors = colors.slice(currentIndex, currentIndex + itemsPerPage);
        if (visibleColors.length < itemsPerPage) {
            visibleColors = visibleColors.concat(colors.slice(0, itemsPerPage - visibleColors.length));
        }
    };

    const next = () => {
        currentIndex = (currentIndex + itemsPerPage) % colors.length;
        updateVisibleColors();
    };

    const prev = () => {
        currentIndex = (currentIndex - itemsPerPage + colors.length) % colors.length;
        updateVisibleColors();
    };

    onMount(() => {
        updateVisibleColors();
    });
</script>

<div class="flex flex-col justify-center items-center border gap-10 py-10">
    <div class="flex gap-2 items-center w-full">
        <button on:click={next} class="h-10 w-10 mx-2 font-extrabold bg-gray-200 rounded-full hover:bg-gray-300">
            &lt;
        </button>
        <div class="carousel-container flex-1 flex justify-center">
            <div class="carousel flex gap-14 justify-center w-full">
                {#each visibleColors as color}
                    <div class="flex flex-col items-center gap-3 cursor-pointer">
                        <div class="h-28 w-28 rounded-full" style="background:{color};"></div>
                        <p class="text-xs text-gray-500 capitalize">{color}</p>
                    </div>
                {/each}
            </div>
        </div>
        <button on:click={next} class="h-10 w-10 mx-2 font-extrabold bg-gray-200 rounded-full hover:bg-gray-300">
            &gt;
        </button>
    </div>
</div>

<style>
    .carousel-container {
        overflow: hidden;
    }

    .carousel {
        display: flex;
        transition: transform 0.5s ease;
    }
</style>
