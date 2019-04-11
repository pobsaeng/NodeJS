class SimulateData {
    static simulateJSonData() {
        let items = [
            { "id": "2", "title": "กล้องดิจิตอล เต็มที่ทุกรายละเอียดของการถ่ายภาพ", "authors": "ณัฐพงศ์ ฐิติมานะกุล, รักษ์ศักดิ์ สิทธิวิไล", "price": "220", "stock": "3" },
            { "id": "3", "title": "The Secret เดอะซีเคร็ต", "authors": "Rhonda Byrne", "price": "245", "stock": "5" },
            { "id": "4", "title": "คู่มือสร้างเว็บไซท์ด้วยตนเอง", "authors": "ดวงพร เกี๋ยงคำ", "price": "249", "stock": "5" },
            { "id": "5", "title": "วิธีพูดกับลูก โดยไม่ทำร้ายจิตใจของเขา และทำให้เขาร่วมมือยอมทำตามคุณ", "authors": "เฮม จีนอตต์", "price": "189", "stock": "5" },
            { "id": "6", "title": "เขาเก็บเงินกันอย่างไรได้เป็นล้าน", "authors": "อมิตา อริยอัชฌา", "price": "140", "stock": "5" },
            { "id": "7", "title": "อัจฉริยะสร้างได้", "authors": "วนิษา เรซ", "price": "186", "stock": "5" },
            { "id": "8", "title": "30 วิธีเอาชนะโชคชะตา ", "authors": "บัณฑิต อึ้งรังษี", "price": "175", "stock": "5" },
            { "id": "9", "title": "เรียนรู้เครือข่ายและอุปกรณ์ Cisco ด้วยโปรแกรม Simulation ", "authors": "ธวัชชัย ชมศิริ, สุชาติ คุ้มมะณี", "price": "249", "stock": "5" },
            { "id": "10", "title": "มองโลกแบบวิกรม ", "authors": "วิกรม กรมดิษฐ์, วิมล ไทรนิ่มนวล", "price": "100", "stock": "5" },
            { "id": "11", "title": "คู่มือสอบใบขับขี่รถยนต์และรถจักรยานยนต์", "authors": "สมปอง คงนิ่ม", "price": "49", "stock": "5" },
            { "id": "12", "title": "เว็บไซท์สวย สร้างง่ายด้วย Mambo", "authors": "กอบเกียรติ สระอุบล", "price": "195", "stock": "5" },
            { "id": "13", "title": "แฮร์รี่ พอตเตอร์กับเครื่องรางยมทูต เล่ม 7", "authors": "J.K. ROWLING", "price": "495", "stock": "5" },
            { "id": "14", "title": "ครบทุกเรื่อง คอมมือใหม่ เข้าใจง่าย", "authors": "สุธีร์ นวกุล", "price": "225", "stock": "5" },
            { "id": "15", "title": "เขียนโปรแกรม JAVA เบื้องต้น ", "authors": "ทศพล ธนะทิพานนท์, วรเศรษฐ สุวรรณิก", "price": "195", "stock": "5" },
            { "id": "16", "title": "เริ่มต้นเรียนรู้วิทยาการคอมพิวเตอร์", "authors": "ยอดธง รอดแก้ว, วรเศรษฐ สุวรรณิก", "price": "165", "stock": "5" },
            { "id": "17", "title": "Java GUI using NetBeans ", "authors": "วรเศรษฐ สุวรรณิก", "price": "145", "stock": "10" }];
        return items;
    }
    static getList() {
        let ANCESTRY_FILE = [
            {
                "name": "Emma de Milliano",
                "sex": "f",
                "born": 1901,
                "died": 1956,
                "father": "Petrus de Milliano",
                "mother": "Sophia van Damme"
            },
            {
                "name": "Carolus Haverbeke",
                "sex": "m",
                "born": 1832, "died": 1905,
                "father": "Carel Haverbeke",
                "mother": "Maria van Brussel"
            },
        ];
        return ANCESTRY_FILE;
    }
    static getEnglish() {
        let LANG_ENG =
            {
                home: 'Home',
                es6: 'Es6 <b class="caret"/>',
                table: 'Table',
                webstorage: 'Web Storage',
                dom: 'Dom <b class="caret"/>',
                event: 'Event',
                profile: '<span class="glyphicon glyphicon-credit-card"></span> Profile',
                cart: '<span class="glyphicon glyphicon-shopping-cart"></span> Cart',
                pay: '<span class="glyphicon glyphicon-usd"></span> Pay',
                signout: '<span class="glyphicon glyphicon-log-out"></span> Sign out',
                firstname: 'First name',
                lastname: 'Last name',
                phone: 'Phone',
                button1: 'Button 1',
                button2: 'Button 2',
                button3: 'Button 3',
                add: 'Add',
                save: 'Save',
                clear: 'Clear',
                male: 'Male',
                female: 'Female',
                address: 'Address',
                sex: 'Sex',
                language: 'English',
                programminglan: 'Programming',
                browse: 'Browse..',
                optionlabel: 'Option',
                option1: 'Option 1',
                option2: 'Option 2',
                option3: 'Option 3',
                option4: 'Option 4',
                selectone: 'Select list',
                email: 'Email Address:',
                password: 'Password:',
                jsxyplot:'Move element on screen'
            };
        return LANG_ENG;
    }
    static getThai() {
        let LANG_THAI =
            {
                home: 'หน้าแรก <b class="caret"/>',
                es6: 'การเขียน ES6 <b class="caret"></b>',
                table: 'ตาราง',
                webstorage: 'การใช้งานเว็บสตอเรจ',
                dom: 'การเข้าถึงแท็ก <b class="caret"></b>',
                event: 'เหตุการณ์ของแท็ก',
                profile: '<span class="glyphicon glyphicon-credit-card"></span> Profile',
                cart: '<span class="glyphicon glyphicon-shopping-cart"></span> ตะกร้า',
                pay: '<span class="glyphicon glyphicon-usd"></span> ชำระ',
                signout: '<span class="glyphicon glyphicon-log-out"></span> ออกจากระบบ',
                firstname: 'ชื่อ',
                lastname: 'สกุล',
                phone: 'เบอร์โทร',
                button1: 'กดปุ่ม 1',
                button2: 'กดปุ่ม 2',
                button3: 'กดปุ่ม 3',
                add: 'เพิ่ม',
                save: 'บันทึก',
                clear: 'ล้าง',
                male: 'ชาย',
                female: 'หญิง',
                address: 'ที่อยู่',
                sex: 'เพศ',
                language: 'ไทย',
                programminglan: 'การเขียนโปรแกรม',
                browse: 'เลือกรูป..',
                optionlabel: 'ตัวเลือกรายการ',
                option1: 'ตัวเลือกที่ 1',
                option2: 'ตัวเลือกที่ 2',
                option3: 'ตัวเลือกที่ 3',
                option4: 'ตัวเลือกที่ 4',
                selectone: 'เลือกรายการ',
                email: 'อีเมล์:',
                password: 'รหัสผ่าน:',
                jsxyplot:'การเคลื่อนย้ายอิเลเมนท์'
            };
        return LANG_THAI;
    }
}