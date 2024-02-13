<template>
  <div>
    <v-app>
      <v-navigation-drawer>
        <v-list>
          <v-list-item to="/">หน้าแรก</v-list-item>
          <v-list-item to="/courses">หลักสูตร</v-list-item>
          <v-list-item to="/credits">หน่วยกิต</v-list-item>
          <v-list-item to="/transfers">เทียบโอนหน่วยกิต</v-list-item>
          <v-list-item to="/profile">ผู้ใช้งาน</v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container>
          <v-jumbotron>
            <v-card-title>
              <h1>ธนาคารหน่วยกิตมหาวิทยาลัยเเม่โจ้</h1>
            </v-card-title>
            <v-card-text>
              <p>คณะวิทยาศาสตร์ สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยแม่โจ้</p>
            </v-card-text>
            <v-card-actions>
              <v-btn to="/courses">ดูหลักสูตร</v-btn>
              <v-btn to="/credits">ดูหน่วยกิต</v-btn>
              <v-btn to="/transfers">เทียบโอนหน่วยกิต</v-btn>
              <v-btn to="/pressrelease">ข่าวประชาสัมพันธ์</v-btn>
               <v-btn to="/imformation">ระบบสารสนเทศ</v-btn>
              <v-btn to="/about">เกี่ยวกับ</v-btn>
            </v-card-actions>
          </v-jumbotron>
          <v-card>
            <v-card-title>
              <h2>ข่าวสารประชาสัมพันธ์</h2>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    เปิดรับสมัครหลักสูตรใหม่
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    12 มกราคม 2567
                  </v-list-item-subtitle>
                </v-list-item>
                <v-list-item>
                  <v-list-item-title>
                    ระบบธนาคารหน่วยกิตมีการอัพเดท...
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    10 มกราคม 2567
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>
              <h3>หลักสูตร</h3>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-item v-for="course in courses" :key="course.id">
                  <v-list-item-title>{{ course.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ course.description }}</v-list-item-subtitle>
                  <v-list-item-action>
                    <v-btn to={/courses/${course.id}}>ดูรายละเอียด</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      // ข้อมูลสำหรับหน้าแรก
      news: [
        {
          title: 'เปิดรับสมัครหลักสูตรใหม่...',
          date: '12 มกราคม 2567'
        },
        {
          title: 'ระบบธนาคารหน่วยกิตมีการอัพเดท...',
          date: '10 มกราคม 2567'
        }
      ]
    }
  },
  methods: {
    // ฟังก์ชันเพิ่มเติม
  }
}
</script>
<style scoped>
nav{
  margin: 10px auto;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
}
</style>



