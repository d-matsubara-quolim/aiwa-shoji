export default {
  template: `<div class="h-auto w-full bg-[linear-gradient(90deg,_rgb(253,244,180)_0%,_rgb(253,244,180)_30%,_transparent_30%,_transparent_70%,_white_70%,_white_100%),_linear-gradient(37deg,_rgb(253,244,180)_50%,_white_50.1%)] bg-no-repeat bg-[length:100%_100%]">
  <nav class="max-w-[85rem] w-full mx-auto px-4 pt-4 md:items-end md:justify-between" aria-label="Global">
  <div class="flex flex-col">
    <div class="py-5 flex items-center justify-between">
      <a class="text-[rgb(102,102,102)] hover:text-opacity-50 flex items-center gap-3" href="./index.html">
        <img src="/img/logo.png" alt="株式会社アイワ商事 ロゴ" class="h-24 w-auto" />
        <div class="text-[3vw] whitespace-nowrap">
          <div class="md:text-lg">断熱資材・産業資材の総合商社</div>
          <div class="text-xl md:text-3xl">株式会社 アイワ商事</div>
          <div class="md:text-sm">Aiwasyoji Trading Company.co.,Ltd</div>
        </div>
      </a>
      <div class="text-[rgb(77,77,77)] basis-full grow md:block md:h-auto h-screen" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
        <div class="flex flex-col mt-5 md:flex-row md:items-center md:justify-end md:px-10">
          <a class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base lg:text-xl whitespace-no-wrap hover:bg-[rgb(243,234,150)] focus:outline-none focus:ring-2 focus:ring-offset-2 " href="./index.html">HOME</a>
          <a class="inline-flex items-center justify-center px-4 py-2 text-base lg:text-xl whitespace-no-wrap hover:bg-[rgb(243,234,150)] focus:outline-none focus:ring-2 focus:ring-offset-2 " href="./company.html">会社概要</a>
          <a class="inline-flex items-center justify-center px-4 py-2 text-base lg:text-xl whitespace-no-wrap hover:bg-[rgb(243,234,150)] focus:outline-none focus:ring-2 focus:ring-offset-2 " href="./product.html">取扱商品</a>
          <a class="inline-flex items-center justify-center px-4 py-2 text-base lg:text-xl whitespace-no-wrap hover:bg-[rgb(243,234,150)] focus:outline-none focus:ring-2 focus:ring-offset-2 " href="./recruit.html">採用情報</a>
        </div>
      </div>
        <div class="md:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-[rgb(243,234,150)] transition-all text-sm " data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation" v-on:click="toggleNavbar()">
          <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
</div>`,
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}