<template>
	<section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover" src="https://rr1---sn-4g5lzner.c.drive.google.com/videoplayback?expire=1684963291&ei=m0duZKPOEYSxhwbSq57gBA&ip=24.133.65.58&cp=QVRNVkpfUlJXQlhPOjJ3RmFUMTFOdVByTER1Z2dLQ2p0Wi04OVZoNjltVnJscU5wU1lWckh6Znk&id=a94c80ab2993f774&itag=22&source=webdrive&requiressl=yes&ttl=transient&susc=dr&driveid=1Tfjb-yrDdf-QKUS-zHPnJdDOB87tACAl&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=234.010&lmt=1659469632804747&subapp=DRIVE_WEB_FILE_VIEWER&txp=0011224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgT9P9GABVIEQTa4kL5HwhsKVt_bQ2br30pc7TA9lpezcCICH2Hg5OTQHMBcyyk9uloSOEEcohKzVROndgFBNX1P6e&cpn=BhSLB6NIThQzpVhu&c=WEB_EMBEDDED_PLAYER&cver=1.20230521.00.00&redirect_counter=1&cm2rm=sn-nv4l776&req_id=b747125c5cfba3ee&cms_redirect=yes&cmsv=e&mh=O4&mm=34&mn=sn-4g5lzner&ms=ltu&mt=1684948853&mv=m&mvi=1&pl=22&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgEMdoAkzFABcEJJxAO7WtIhCUaCiP-uhdG0rRRFX0PLMCIEqESI31xYcpwPhx22S-psfPv4_moISlzwII_-OvClm4" type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content space-y-2">
        <h1 class="font-light text-6xl">Lorem ipsum dolor</h1>
        <h3 class="font-light text-lg mx-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    </div>
</section>

</template>
<script>
export default {
    data() {
      return {
	  }
    },
    computed:{},
    mounted() {},
    methods: {},
  }
</script>

<style scoped>
.video-docker video {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.video-docker::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.video-content {
  z-index: 2;
}
</style>