<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="ml-2">
          สมัครเรียนแบบบุคคลภายนอก Credit Bank
          กับมหาวิทยาลัยแม่โจ้</v-card-title
        >
        <v-card-text class="pb-0">
          <v-form ref="formReg">
            <v-row no-gutters>
              <v-col cols="12" md="2" class="px-2">
                <v-select
                  v-model="titleName"
                  outlined
                  :items="titleList"
                  item-text="name"
                  item-value="name"
                  label="คำนำหน้า"
                ></v-select>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อ"
                  v-model="FIRSTNAME"
                  :rules="[(v) => !!v || 'กรุณาเลือกลักษณะการใช้สิทธิ']"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="นามสกุล"
                  v-model="LASTNAME"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="2" class="px-2">
                <v-select
                  outlined
                  label="ระดับการศึกษา"
                  :items="levelClass"
                  item-text="name"
                  item-value="id"
                  v-model="levelC"
                ></v-select>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="อีเมล"
                  v-model="EMAIL"
                ></v-text-field>
              </v-col>
              <v-col cols="6" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="เบอร์โทรศัพท์"
                  v-model="TEL"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="5" class="px-2">
                <v-text-field
                  outlined
                  label="ชื่อสถานที่ทำงาน / สถานศึกษา*"
                  v-model="SCHOOL"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="px-2">
                <p class="title">
                  กรุณาแนบไฟล์ (upload file) สำเนาบัตรประชาชน
                  ที่มีลายเซ็นรับรองสำเนาถูกต้อง โดยใช้สามารถใช้ไฟล์ pdf
                </p>
                <v-file-input
                  outlined
                  label="สำเนาบัตรประชาชน"
                  v-model="file"
                  @change="onFileChange"
                ></v-file-input>
              </v-col>
              <v-col cols="12" class="px-2">
                <p class="title">สมัครเรียน รายวิชาของคณะ</p>
              </v-col>
              <v-col cols="12" md="6" class="px-2">
                <v-select
                  outlined
                  label="รายวิชาของคณะ"
                  :items="subjectList"
                  item-text="subject"
                  item-value="id"
                  v-model="subject"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" class="px-2">
                <v-select
                  outlined
                  label="วันและเวลาที่เปิดสอน"
                  :items="subjectList"
                  item-text="time"
                  item-value="time"
                  v-model="subjectTime"
                ></v-select>
              </v-col>
              <v-col cols="12" class="px-2">
                <v-textarea
                  outlined
                  label="ความคิดเห็นเพิ่มเติม"
                  v-model="comment"
                ></v-textarea>
              </v-col>
              <v-col cols="12" class="px-2">
                <v-btn
                  width="100%"
                  height="45px"
                  color="primary"
                  class="mb-4"
                  @click="register"
                >
                  บันทึกข้อมูล
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { db } from "../plugins/firebaseInit";
import { collection, addDoc, getDocs, query, doc } from "firebase/firestore";
export default {
  data() {
    return {
      titleName: "",
      titleList: [
        {
          name: "นาย",
        },
        {
          name: "นาง",
        },
        {
          name: "นางสาว",
        },
      ],
      FIRSTNAME: "",
      LASTNAME: "",
      levelClass: [
        {
          id: 1,
          name: "มัธยมศึกษาตอนต้น",
        },
        {
          id: 2,
          name: "มัธยมศึกษาตอนปลาย",
        },
        {
          id: 3,
          name: "ปวช.",
        },
        {
          id: 4,
          name: "ปวส.",
        },
        {
          id: 5,
          name: "อนุปริญญา",
        },
        {
          id: 6,
          name: "ปริญญาตรี",
        },
        {
          id: 7,
          name: "ปริญญาโท",
        },
        {
          id: 8,
          name: "ปริญญาเอก",
        },
      ],
      levelC: "",
      EMAIL: "",
      TEL: "",
      SCHOOL: "",
      file: null,
      files: [],
      subjectList: [
        {
          id: 1,
          subject: "วิชาการเขียนโปรแกรมเบื้องต้น สาขาวิทยาการคอมพิวเตอร์",
          time: "วันเสาร์ ที่ 1 เมษายน 13.00 น.-15.00 น.",
        },
      ],
      subject: "",
      subjectTime: "",
      comment: "",
      listData: [],
      listarray: [],
    };
  },

  methods: {
    onFileChange(event) {
      this.file = event;
    },

    async register() {
      if (!this.$refs.formReg.validate()) {
        this.$swal({
          icon: "warning",
          title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        });
      } else {
        const usersCollectionRef = collection(db, "users");
        const querySnapshot = await getDocs(usersCollectionRef);
        const count = querySnapshot.size;
        const newID = count + 1;
        const docRef = await addDoc(collection(db, "users"), {
          ID: newID,
          TITLE: this.titleName,
          FIRSTNAME: this.FIRSTNAME,
          LASTNAME: this.LASTNAME,
          LEVELC: this.levelC,
          EMAIL: this.EMAIL,
          TEL: this.TEL,
          SCHOOL: this.SCHOOL,
          SUBJECT: this.subject,
          SUBTIME: this.subjectTime,
          COMMENT: this.comment,
        });
        this.$swal({
          position: "center",
          icon: "success",
          title: "ลงทะเบียนสำเร็จ",
          showConfirmButton: false,
          timer: 1500,
        });
        this.$refs.formReg.reset();
      }
    },

    async listarry() {
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
    },
  },
};
</script>