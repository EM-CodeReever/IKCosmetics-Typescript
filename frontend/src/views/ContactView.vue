<template>
  <div>
    <NavbarComponent/>
    <h2 class="text-4xl text-gray-200 text-center my-5 font-bold">Contact Us</h2>
    <div class="card lg:card-side bg-base-100 shadow-xl max-h-fit m-5 lg:mx-52">
      <figure class="flex items-center justify-center bg-gray-800 aspect-square w-1/1 h-36 lg:w-36">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
        </figure>
      <div class="card-body p-5">
        <h2 class="card-title">Call us at:</h2>
        <p>tel: 876-234-0987</p>
      </div>
    </div>

    <div class="card lg:card-side bg-base-100 shadow-xl max-h-fit m-5 lg:mx-52">
      <figure class="flex items-center justify-center bg-gray-800 aspect-square w-1/1 h-36 lg:w-36">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
        </figure>
      <div class="card-body p-5">
        <h2 class="card-title">Send us an email:</h2>
        <p>Ishmaelklassic@gmail.com</p>
      </div>
    </div>

    <div class="card lg:card-side bg-base-100 shadow-xl max-h-fit m-5 lg:mx-52">
      <figure class="flex items-center justify-center bg-gray-800 aspect-square w-1/1 h-36 lg:w-36">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </figure>
      <div class="card-body p-5">
        <h2 class="card-title">Find us at</h2>
        <p class="text-sm font-medium">4 MARKET ROAD,<br>SHOP #11 <br>PAPINE, ST.ANDREW</p>
      </div>
    </div>

    <div class="card lg:card-side bg-base-100 shadow-xl max-h-fit m-5 lg:mx-52">
      <figure class="flex items-center justify-center bg-gray-800 aspect-square w-1/1 h-36 lg:w-36">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </figure>
      <div class="card-body p-5">
        <h2 class="card-title">Opening Hours</h2>
        <p>Monday - Friday 9am - 5pm <br> Weekends 11am - 4pm</p>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  name: 'ContactView',
  components: {
    NavbarComponent,
    FooterComponent
  }
}
</script>
<style>
.fullPage{
  min-height: 100vh;
}
</style>