<script>
     import { onMount } from 'svelte';
    export let showModal = false;
    export let isPromo = false;

    
  </script>
  
  {#if showModal}
    <div class="backdrop " class:promo={isPromo} on:click|self on:keypress>
      <div class="modal max-w-[480px] mt-10 mx-auto px-4">
        <slot></slot>
      </div>
    </div>
  {/if}
  
  <style>
    .backdrop{
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0,0,0,0.8);
    }
    .promo .modal{
      background: crimson;
      color: white;
    }
  </style>