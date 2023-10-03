<template >
    <ol>
        <li>España
            <ul>
                <li>Manolo</li>
                <li>Pepe</li>
                <li>Chus</li>
            </ul>
        </li>
        <li>Inglaterra
            <ul>
                <li>Manolo</li>
                <li>Pepe</li>
                <li>Chus</li>
            </ul>
        </li>
        <li>Francia
            <ul>
                <li>Manolo</li>
                <li>Pepe</li>
                <li>Chus</li>
            </ul>
        </li>
        <li>Italia
            <ul>
                <li>Manolo</li>
                <li>Pepe</li>
                <li>Chus</li>
            </ul>
        </li>
        <li>Portugal
            <ul>
                <li>Manolo</li>
                <li>Pepe</li>
                <li>Chus</li>
            </ul>
        </li>
    </ol>
    <CasaDelLibro />
</template>
<script>
import CasaDelLibro from '../components/CasaDelLibro.vue'
export default {
    components: { CasaDelLibro }
}
</script>
<style lang="css">
#app>ol {
    text-align: left;
}
</style>