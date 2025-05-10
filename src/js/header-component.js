export default {
  template: `<div class="h-[500px] w-full bg-[linear-gradient(90deg,_rgb(253,244,180)_0%,_rgb(253,244,180)_45%,_transparent_45%,_transparent_70%,_white_70%,_white_100%),_linear-gradient(37deg,_rgb(253,244,180)_63%,_white_63.1%)] bg-no-repeat bg-[length:100%_100%]">
  <nav class="max-w-[85rem] w-full mx-auto px-4 pt-4 md:items-end md:justify-between" aria-label="Global">
  <div class="flex flex-col">
    <div class="md:px-5 flex items-center justify-between">
      <a class="text-sky-600 hover:text-opacity-50" href="./index.html">
        <div class="md:text-lg text-[3vw]">医療法人誠医会<span class="pl-1 md:text-3xl text-[4.5vw]">川冨内科</span></div>
        <div class="md:text-lg text-[3vw]">kawatomi medical clinic</div>
      </a>
      <div>
        <div class="md:text-xs text-[2vw] text-sky-600">長崎県佐世保市白南風町 12-15</div>
        <div class="md:text-3xl text-[4vw] text-sky-600">0956-22-2233</div>
      </div>
        <div class="md:hidden">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm " data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation" v-on:click="toggleNavbar()">
          <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
          <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="basis-full grow md:block md:h-auto h-screen" v-bind:class="{'hidden': !showMenu, 'block': showMenu}">
      <div class="flex flex-col mt-5 md:flex-row md:items-center md:justify-center md:px-10 md:divide-sky-600">
        <a class="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-xl font-medium whitespace-no-wrap md:border-x border-b md:flex-1 md:border-l border-sky-600 shadow-sm hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" href="./index.html">当院について</a>
        <a class="inline-flex items-center justify-center px-4 py-2 text-xl font-medium whitespace-no-wrap md:border-r border-b md:flex-1 border-sky-600 shadow-sm hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" href="./specialty.html">診療科</a>
        <a class="inline-flex items-center justify-center px-4 py-2 text-xl font-medium whitespace-no-wrap md:border-r border-b md:flex-1 border-sky-600 shadow-sm hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" href="./doctor.html">医師紹介</a>
        <a class="inline-flex items-center justify-center px-4 py-2 text-xl font-medium whitespace-no-wrap md:border-r border-b md:flex-1 border-sky-600 shadow-sm hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" href="./floor.html">院内紹介</a>
        <a class="inline-flex items-center justify-center px-4 py-2 text-xl font-medium whitespace-no-wrap md:border-r border-b md:flex-1 border-sky-600 shadow-sm hover:bg-sky-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600" href="./info.html">お知らせ</a>
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