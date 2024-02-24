<template>
  <div>
    <v-app-bar color="1E1E1E" dark>
      <v-toolbar-title>
        <v-img
          max-height="80"
          max-width="300"
          class="ml-4"
          :src="require('~/assets/mju_logo_FOOTER.png')"
        >
        </v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <button class="mr-10" @click="homepage">หน้าหลัก</button>
      <button class="mr-10" @click="news">ข่าวประชาสัมพันธ์</button>
      <button class="mr-10" @click="services">ระบบสารสนเทศ</button>
      <button class="mr-10" @click="about">เกี่ยวกับเรา</button>
      <v-btn depressed color="success" @click="login"
        >เข้าสู่ระบบ | Log in</v-btn
      >
    </v-app-bar>
    <div>
      <v-app>
        <v-content>
          <v-container>
            <v-layout row wrap>
              <v-flex xs15 sm12 md12>
                <v-card >
                  <v-card-title>
                    <h3 class="text-h3">Credit Bank Science MJU</h3>
                  </v-card-title>
                  <v-card-text>
                    <p>
                      กรุณากรอกเลขบัตรประจำตัวประชาชนเพื่อตรวจสอบข้อมูลผู้ใช้
                    </p>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn>
                      <v-icon>mdi-magnify</v-icon>
                      ตรวจสอบข้อมูลผู้ใช้
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-content>
      </v-app>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditBankScienceMJU",
  data() {
    return {
      // TODO: เพิ่มโค้ดสำหรับจัดการข้อมูลผู้ใช้
    };
  },
  methods: {
    // TODO: เพิ่มโค้ดสำหรับตรวจสอบข้อมูลผู้ใช้
  },
};
</script>
