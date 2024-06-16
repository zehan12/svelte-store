<script lang="ts">
    import { ShoppingBag, User } from "lucide-svelte";
    import svelteLogo from "../../assets/svelte.svg";
    import Search from "../ui/Search/Search.svelte";
</script>

<header class="flex items-center justify-between px-10 border py-4 h-20">
    <nav class="flex items-center gap-9">
        <div class="flex items-center gap-3 p-2">
            <img class="w-12 h-12" alt="logo" src={svelteLogo} />
            <h2 class="text-xl uppercase font-semibold">svelte shop</h2>
        </div>
        <ul class="hidden sm:flex gap-6 text-sm text-gray-600">
            <li class="relative group h-20 flex items-center border-b-4 border-transparent hover:border-purple-500">
                <a class="uppercase" href="/electronics">Electronics</a>
                <div class="hidden absolute top-full -left-[290px] transform w-screen mt-2 bg-white shadow-lg group-hover:block">
                    <div class="grid grid-cols-2 gap-10 p-8">
                        <a class="flex" href="#">
                            <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                            <div class="flex flex-col ml-4">
                                <span class="text-left font-medium leading-none">Heading</span>
                                <span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </a>
                        <!-- Add more links as needed -->
                    </div>
                </div>
            </li>
            <li class="relative group h-20 flex items-center border-b-4 border-transparent hover:border-amber-400">
                <a class="uppercase" href="/fashion">Fashion</a>
                <div class="hidden absolute top-full left-0 w-screen max-w-3xl mt-2 bg-white shadow-lg group-hover:block">
                    <div class="grid grid-cols-2 gap-10 p-8">
                        <a class="flex" href="#">
                            <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                            <div class="flex flex-col ml-4">
                                <span class="text-left font-medium leading-none">Heading</span>
                                <span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </a>
                        <!-- Add more links as needed -->
                    </div>
                </div>
            </li>
            <li class="relative group h-20 flex items-center border-b-4 border-transparent hover:border-pink-600">
                <a class="uppercase" href="/home">Home</a>
                <div class="hidden absolute top-full left-0 w-screen max-w-3xl mt-2 bg-white shadow-lg group-hover:block">
                    <div class="grid grid-cols-2 gap-10 p-8">
                        <a class="flex" href="#">
                            <span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
                            <div class="flex flex-col ml-4">
                                <span class="text-left font-medium leading-none">Heading</span>
                                <span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        </a>
                        <!-- Add more links as needed -->
                    </div>
                </div>
            </li>
        </ul>
    </nav>
    <div class="px-10 flex items-baseline gap-8">
        <Search cls="hidden lg:flex" placeholder={"Search for products, brands and more"} />
        <button class="flex flex-col items-center gap-y-0.5">
            <ShoppingBag class="font-thin" size={25} />
            <p class="text-xs capitalize text-gray-800">cart</p>
        </button>
        <button class="flex flex-col items-center gap-y-0.5">
            <User class="font-thin" size={25} />
            <p class="text-xs capitalize text-gray-800">Login</p>
        </button>
    </div>
</header>

<style>
    .group:hover .group-hover\:block {
        display: block;
    }
</style>
