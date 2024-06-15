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
            <li class="h-20 flex items-center border-b-4 border-transparent hover:border-purple-500">
                <a class="uppercase" href="/electronics">Electronics</a>
            </li>
            <li class="h-20 flex items-center border-b-4 border-transparent hover:border-amber-400">
                <a class="uppercase" href="/fashion">Fashion</a>
            </li>
            <li class="h-20 flex items-center border-b-4 border-transparent hover:border-pink-600">
                <a class="uppercase" href="/home">Home</a>
            </li>
        </ul>
    </nav>
    <div class="px-10 flex items-baseline gap-8">
        <Search placeholder={"Search for products, brands and more"} />
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
