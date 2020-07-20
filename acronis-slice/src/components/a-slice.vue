<template>
  <div class="a-slice">
    <div class="a-general-info">
      <div class="a-preheader">{{content.preheader}}</div>
      <div class="a-header">{{content.header}}</div>
      <div class="a-subheader a-green">{{content.subheader}}</div>
      <div class="a-info">{{content.info}}</div>
    </div>

    <div class="a-cards">
      <a-card v-for="(card,index) in content.blocks" :key="index" :content="card" />
    </div>
    <div class="a-header-link">
      <span>Learn More</span>
      <img :src="arrowPath" />
    </div>
  </div>
</template>

<script>
import aCard from "./a-card.vue";
export default {
  components: {
    "a-card": aCard
  },
  data() {
    return {
      content: {
        header: "Acronis Cyber Disaster Recovery Cloud",
        preheader: "Sync and Share",
        subheader: "Just Updated",
        info:
          "A turnkey, self-service solution that lets you protect your customers’ workloads by recovering their IT systems and applications utilizing the Acronis cloud infrastructure.",
        blocks: [
          {
            header: "AFP Connection to File Shares",
            image: "0001_S_full_image_backup.svg",
            label: "",
            info:
              "With Acronis Files Connect, Macs connect to and mount file shares on Windows file servers and NAS as native AFP volumes. This allows Mac users to continue using the same tools."
          },
          {
            header: "File Access for Mobile Devices",
            image: "0003_S_active_ransomware_protection.svg",
            label: "",
            info:
              "Acronis Files Connect isn’t limited to Macs. Seamless file access is also provided for mobile devices (iOS, Android, and Windows Phone) with intuitive browsing, searching, previewing."
          },
          {
            header: "Full Content Spotlight Searching",
            image: "0071_S_survival_kit.svg",
            label: "Exclusive",
            info:
              "Acronis Files Connect links Mac Spotlight to a server-side index that seamlessly integrates with the native Windows Search service or a built-in Acronis content indexer."
          },
          {
            header: "Time Machine Backup to File Shares",
            image: "0072_S_backup_cleanup_tool.svg",
            label: "",
            info:
              "With Acronis Files Connect, Mac users’ documents can be automatically backed up to a Windows file server or NAS, and users can selectively restore previous versions directly."
          },
          {
            header: "Absolute VM Protection",
            image: "0076_L_application_level_replication Copy.svg",
            label: "",
            info:
              "Defend more hypervisors, including RedHat, KVM, Oracle VM, Citrix Xen, VMware and Hyper-V, with simple licensing per host allowing protection for an unlimited number of VMs "
          },

          {
            header: "a Instant Restore",
            image: "0083_L_acronis_instant_restore Copy.svg",
            label: "",
            info:
              "Reduce outage recovery time with best-in-industry RTO by starting any physical or virtual Windows or Linux system directly from the backup storage"
          }
        ]
      },
      arrowPath: ""
    };
  },
  mounted() {
    this.arrowPath = require("../assets/icons/arrow-right--16.svg");
  }
};
</script>

<style>
.a-slice {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  min-height: 100vh;
  align-items: flex-start;
}

.a-slice .a-general-info .a-preheader {
  width: 100%;
  height: 24px;
  margin-top: 50px;
}

.a-slice .a-general-info .a-header {
  width: 100%;
  height: 64px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.a-preheader {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: rgba(36, 49, 67, 0.6);
  mix-blend-mode: normal;
}

.a-header {
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #00204d;
}
.a-subheader {
  width: 100%;
  height: 24px;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
}

.a-subheader.a-green {
  color: #9bc225;
  mix-blend-mode: normal;
}

.a-info {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  margin-top: 24px;
  margin-bottom: 40px;
  color: #00204d;
}

.a-cards {
  display: flex;
  flex-flow: row wrap;
  min-width: 350px;
}

.a-header-link {
  position: absolute;
  left: 0px;
  bottom: 20px;

  font-size: 24px;
  line-height: 32px;
  color: #408bea;
}

@media only screen and (max-width: 575px),
  only screen and (max-device-width: 575px) {
  .a-slice {
    width: 350px;
    flex-direction: column;
  }

  .a-slice .a-cards {
    margin-top: 20px;
  }

  .a-slice .a-general-info {
    width: 100%;
    margin-left: 16px;
  }
}

@media only screen and (min-width: 576px) and (max-width: 1023px),
  only screen and (min-device-width: 576px) and (max-device-width: 1023px) {
  .a-slice {
    max-width: 736px;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }

  .a-slice .a-general-info {
    width: 100%;
    max-width: 704px;
    margin-left: 16px;
  }

  .a-slice .a-cards {
    margin-top: 20px;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1279px),
  only screen and (min-device-width: 1024px) and (max-device-width: 1279px) {
  .a-slice {
    flex-direction: row;
    margin-left: 16px;
  }
  .a-slice .a-general-info {
    /* 294+16+16 */
    min-width: 293px;
    width: 33.33%;
  }

  .a-slice .a-cards {
    margin-top: 50px;
  }

  .a-slice .a-cards .a-card {
    width: 294px;
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1439px),
  only screen and (min-device-width: 1280px) and (max-device-width: 1439px) {
  .a-slice {
    margin-left: 48px;
  }
  .a-slice .a-general-info {
    /* 358+16+16 */
    min-width: 357px;
    width: 33.33%;
  }
  .a-slice .a-cards {
    margin-top: 50px;
  }
  .a-slice .a-cards .a-card {
    width: 358px;
  }
}

@media screen and (min-width: 1440px) {
  .a-slice {
    margin-left: 64px;
  }
  .a-slice .a-general-info {
    min-width: 411px;
    width: 33.33%;
  }
  .a-slice .a-cards {
    margin-top: 50px;
  }
  .a-slice .a-cards .a-card {
    width: 411px;
  }
}
</style>
