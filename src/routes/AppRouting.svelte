<script lang="ts">
    import { Router, Route } from "svelte-routing";
    import Home from "../pages/Home.svelte";
    export let url: string = "";
</script>

<Router {url}>
    <Route path="/"><Home /></Route>
</Router>
