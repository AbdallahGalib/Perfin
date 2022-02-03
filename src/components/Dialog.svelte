<div><button on:click = "{onOpen}">{caption} {open}</button>
<dialog bind:this = {dialog}>
    <h1 class = "p2 flex bg-blue-200"> {title} <button class = "ml-auto" on:click = {onClose}>x</button></h1>
    <slot/>
</dialog>
</div>
<script contexts = "module">

    let dialog

    $: if (open) {
        onOpen()
    }

    export let caption = '', title, open = false
    function onOpen(){
        if(dialog)
            dialog.showModal();
    }
    function onClose(){
        dialog.close();
    }

    if(open)
        onOpen()
    
    // export {open, close, caption}

</script>
<style>
    dialog:backdrop, dialog::backdrop {
        background: repeating-linear-gradient(45deg,rgba(0,0,0,.2),rgba(0,0,0,.2) 1px,rgba(0,0,0,.3) 1px,rgba(0,0,0,.3) 20px);
        backdrop-filter: blur(1px)
    }
</style>