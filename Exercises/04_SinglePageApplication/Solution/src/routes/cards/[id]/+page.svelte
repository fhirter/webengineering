<script>
    import { page } from '$app/stores';
    import Card from "../../../lib/Card.svelte";
</script>
<Card id="{$page.params.id}"></Card>