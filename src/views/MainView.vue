<template>
  <div
    class="dark:bg-dark-500 flex min-h-[93vh] w-full justify-center dark:text-gray-400"
  >
    <div class="mb-5 flex w-[80%] flex-col gap-2 lg:w-[65%] xl:w-[50%]">
      <div id="about-me" class="my-5 flex flex-col justify-center">
        <!-- bio -->
        <div class="flex flex-col justify-center lg:flex-row">
          <div class="lg:w-7/10 order-2 w-full pr-5 lg:order-1">
            <h1 class="text-3xl">I'm Luong Thien Toan</h1>
            <p>
              I'm a student at Tallinn University of Technology (Estonia).
              Recently, I have decided to finish my thesis online in Vietnam,
              therefore I came back to Vietnam; and I also decided to focus on
              Back-End field, and I equipted myself with a concrete foundation of
              Java, Spring Framework. By spending years in a strange country with
              strangers, I am highly confident about my adaptability in various
              situations.
            </p>
          </div>
          <div
            class="lg:w-3/10 order-1 mb-5 flex w-full justify-center lg:order-2 lg:mb-0 lg:mt-10"
          >
            <div
              class="lg:aspect-ratio flex w-full items-center justify-center overflow-hidden lg:h-40 lg:w-40 lg:rounded-full dark:lg:bg-gray-400"
            >
              <img
                id="avatar"
                src="@/assets/avatar.png"
                alt="thluonavatar"
                class="w-45 scale-x-[-1] lg:h-full lg:w-full lg:object-cover"
              />
            </div>
          </div>
        </div>
        <!-- skills -->
        <h1 class="mb-4 text-2xl">Skills</h1>
        <div class="mb-3 grid grid-cols-4 gap-10 md:grid-cols-6">
          <SkillComp :image="`/assets/Java.svg`" :tooltip="'Java'"/>
          <SkillComp :image="`/assets/Spring.svg`" :tooltip="'Spring'"/>
          <SkillComp :image="`/assets/Javascript.svg`" :tooltip="`Javascript`"/>
          <SkillComp :image="`/assets/NodeJs.svg`" :tooltip="`NodeJs`"/>
          <SkillComp :image="`/assets/C.svg`" :tooltip="'C'"/>
          <SkillComp :image="`/assets/Python.svg`" :tooltip="'Python'"/>
          <SkillComp :image="`/assets/MySQL.svg`" :tooltip="'MySQL'"/>
          <SkillComp :image="`/assets/Vue.svg`" :tooltip="'Vue'"/>
          <SkillComp :image="`/assets/HTML5.svg`" :tooltip="'HTML'"/>
          <SkillComp :image="`/assets/CSS.svg`" :tooltip="'CSS'"/>
          <SkillComp :image="`/assets/Git.svg`" :tooltip="'Git'"/>
          <SkillComp :image="`/assets/Docker.svg`" :tooltip="'Docker'"/>
          
        </div>
      </div>

      <div id="projects" class="my-5 flex flex-col gap-2">
        <h1 class="text-3xl">Somethings I've built</h1>
        <div class="project flex flex-col gap-2 py-4">
          <!-- HCARE -->
          <div class="my-4 flex flex-col md:flex-row">
            <div class="md:w-7/10 md:hover:z-2 order-2 w-full md:order-1">
              <VideoPlayerComp :src="'/assets/asm03_demo.mp4'"/>
              <!-- <img src="@/assets/asm03.png" alt="" /> -->
            </div>
            <div
              class="md:w-3/10 order-1 w-full flex-col items-start md:order-2 md:ms-1 md:items-end"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-right">
                Health Appointment System
              </h3>
              <div
                class="md:z-1 mb-2 w-full md:-ml-[50%] md:mb-0 md:w-[150%] md:overflow-x-auto md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  A fully functional health check-up booking system with desired
                  doctors for patients.
                  <br />
                  Built with Spring Boot 3.3.x, MySQL, JWT, Vue3 and documented
                  with OpenAPI.
                </p>
                <div class="text-right">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/prj321x-asm3-toanltfx2770"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- TDRIVE -->
          <div class="my-4 flex flex-col md:flex-row">
            <div
              class="md:items-between md:w-3/10 w-full flex-col items-start md:ms-1"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-left">
                TDRIVE
              </h3>
              <div
                class="md:z-2 relative mb-2 w-full overflow-auto md:-mr-[50%] md:mb-0 md:w-[150%] md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  A Goolge-Drive like platform, where user can store files remotely.
                  <br />
                  Built with Spring Boot 3.3.x, Spring Webflux, Spring Cloud Gateway, Spring Security, JWT, Eureka, MySQL, Vue3 and documented
                  with OpenAPI.
                </p>
                <div class="text-left">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/tdrive.infra-root"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="hover:z-3 md:w-7/10 w-full">
              <VideoPlayerComp :src="'/assets/tdrive_demo_final.mp4'"/>
            </div>
          </div>
          <!-- Donation Platform -->
          <div class="my-4 flex flex-col md:flex-row">
            <div class="md:w-7/10 md:hover:z-2 order-2 w-full md:order-1">
              <VideoPlayerComp :src="'/assets/asm01_demo.mp4'"/>
            </div>
            <div
              class="md:w-3/10 order-1 w-full flex-col items-start md:order-2 md:ms-1 md:items-end"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-right">
                Fund Raising For Underprivileged
              </h3>
              <div
                class="md:z-1 mb-2 w-full md:-ml-[50%] md:mb-0 md:w-[150%] md:overflow-x-auto md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  Fund Raising platform, whereas "admin" can create donations to support underprivileged, and special cases.
                  <br />
                  Built with Spring Framework 5.3.x, MySQL, Thymeleaf and documented with OpenAPI.
                </p>
                <div class="text-right">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/prj321x-asm2-toanltfx2770"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- JOB-Seeking Solution -->
          <div class="my-4 flex flex-col md:flex-row">
            <div
              class="md:items-between md:w-3/10 w-full flex-col items-start md:ms-1"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-left">
                Jobs Seeking Solution
              </h3>
              <div
                class="md:z-2 relative mb-2 w-full overflow-auto md:-mr-[50%] md:mb-0 md:w-[150%] md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  A Jobs Seeking website for both recruiters and job-seekers, whereas recruiter can represent a company, to create/delete/edit job post.
                  Job seekers can find jobs by category and title, apply to them.
                  <br />
                  Built with Spring Framework 5.3.x, MySQL, Spring Security, Thymeleaf and documented
                  with OpenAPI.
                </p>
                <div class="text-left">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/prj321x-asm2-toanltfx2770"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="hover:z-3 md:w-7/10 w-full">
              <VideoPlayerComp :src="'/assets/asm02_demo.mp4'"/>
            </div>
          </div>
          <!-- KPI Dashboard -->
          <div class="my-4 flex flex-col md:flex-row">
            <div class="md:w-7/10 md:hover:z-2 order-2 w-full md:order-1">
              <VideoPlayerComp :src="'/assets/kpi_dashboard_demo.mp4'"/>
            </div>
            <div
              class="md:w-3/10 order-1 w-full flex-col items-start md:order-2 md:ms-1 md:items-end"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-right">
                KPI Dashboard
              </h3>
              <div
                class="md:z-1 mb-2 w-full md:-ml-[50%] md:mb-0 md:w-[150%] md:overflow-x-auto md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  A continuation of the aforementioned project, where importants metrics are monitored and watched to give in time action.
                  As a testing project, data was generate randomly at Server Side every minute to simulate in real application.
                  <br />
                  Built with NodeJs + ExpressJs, Socket.io, MongoDB, Javascript, Chart.js, HTML, CSS.
                </p>
                <div class="text-right">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/kpiDashboard"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <!-- Color Delection -->
          <div class="my-4 flex flex-col md:flex-row">
            <div
              class="md:items-between md:w-3/10 w-full flex-col items-start md:ms-1"
            >
              <h3 class="my-2 text-xl dark:text-white md:mb-5 md:text-left">
                Color Detection
              </h3>
              <div
                class="md:z-2 relative mb-2 w-full overflow-auto md:-mr-[50%] md:mb-0 md:w-[150%] md:rounded-sm md:bg-emerald-200 md:p-2 md:text-black"
              >
                <p>
                  A simple project simulate the situations in the manufacturing pipeline, where counting the products could be completed bases on the color difference via surveillance camera.
                  <br />
                  Built with OpenCV
                </p>
                <div class="text-left">
                  <a
                    target="_blank"
                    href="https://github.com/thientoan3596/opencv_CourseProject"
                  >
                  <span
                    class="pi pi-github text-xl transition-transform duration-500 hover:scale-125"
                  </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="hover:z-3 md:w-7/10 w-full">
              <VideoPlayerComp :src="'/assets/opencv_demo.mp4'"/>
            </div>
          </div>
        </div>
      </div>
      <div id="contacts" class="my-5 flex flex-col gap-2">
        <h1 class="text-3xl">Contact me</h1>
        <ul id="contact-info" class="flex flex-col gap-2">
          <li>
            <a target="_blank" href="https://www.google.com/maps/place/ph%C6%B0%E1%BB%9Dng+B%C3%ACnh+Tr%C6%B0ng+%C4%90%C3%B4ng,+Th%E1%BB%A7+%C4%90%E1%BB%A9c+City,+Ho+Chi+Minh+City/@10.7821889,106.7752491,15z/data=!4m6!3m5!1s0x31752429d9fc7229:0xa112d316c6c248f3!8m2!3d10.78204!4d106.7794935!16s%2Fg%2F1tvq1lxh?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D">
              <span class="pi pi-map-marker"></span>
              <span> Thủ Đức, Hồ Chí Minh, Việt Nam </span>
            </a>
          </li>
          <li>

            <a href="mailto:toanlt3596@gmail.com">
              <span class="pi pi-at"></span>
              <span> toanlt3596@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+84353030596">
              <span class="pi pi-phone"></span>
              <span> +84 353 030596 </span>
            </a>
          </li>
        </ul>

        <ul class="flex justify-center gap-[10%]">
          <li>
            <a href="mailto:toanlt3596@gmail.com">
              <span
                class="pi pi-envelope text-3xl transition-transform duration-500 hover:scale-125"
              ></span>
            </a>
          </li>
          <li>
            <span
              class="pi pi-linkedin text-3xl transition-transform duration-500 hover:scale-125"
            ></span>
          </li>
          <li>
            <a target="_blank" href="https://github.com/thientoan3596?tab=repositories">
              <span
                class="pi pi-github text-3xl transition-transform duration-500 hover:scale-125"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SkillComp from '@/components/SkillComp.vue';
import VideoPlayerComp from '@/components/VideoPlayerComp.vue';

</script>
