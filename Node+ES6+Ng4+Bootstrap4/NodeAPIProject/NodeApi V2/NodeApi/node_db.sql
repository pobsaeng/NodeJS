# HeidiSQL Dump 
#
# --------------------------------------------------------
# Host:                         10.100.60.178
# Database:                     springdb
# Server version:               5.6.22-log
# Server OS:                    Win64
# Target compatibility:         ANSI SQL
# HeidiSQL version:             4.0
# Date/time:                    2017-12-18 17:33:14
# --------------------------------------------------------

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ANSI,NO_BACKSLASH_ESCAPES';*/
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;*/


#
# Database structure for database 'springdb'
#

CREATE DATABASE /*!32312 IF NOT EXISTS*/ "springdb" /*!40100 DEFAULT CHARACTER SET utf8 */;

USE "springdb";


#
# Table structure for table 'tbl_book'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_book" (
  "book_id" int(11) NOT NULL AUTO_INCREMENT,
  "isbn" varchar(17) NOT NULL,
  "title" varchar(256) NOT NULL,
  "author" varchar(256) NOT NULL,
  "publisher" varchar(256) NOT NULL,
  "yearpublisher" varchar(4) NOT NULL,
  "page" int(3) NOT NULL,
  "price" decimal(10,2) NOT NULL,
  "weight" float NOT NULL,
  "stock" int(11) NOT NULL,
  "createUpdate" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  "createDate" timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY ("book_id")
) AUTO_INCREMENT=16;



#
# Dumping data for table 'tbl_book'
#

LOCK TABLES "tbl_book" WRITE;
/*!40000 ALTER TABLE "tbl_book" DISABLE KEYS;*/
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(1,'978-611-136-480-2','Visual Basic 2008 และ Visual C# 2008 ','พิรพร หมุนสนิท และอัจจิมา เลี้ยงอยู่','เคทีพี','2552',580,'400','500',1579,'2015-11-10 00:08:04','2015-11-10 00:08:01');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(2,'978-611-90280-1-2','Visual Basic 2008 และ Visual C# 2008 ','พิรพร หมุนสนิท และอัจจิมา เลี้ยงอยู่','เคทีพี','2552',580,'400','500',1579,'2015-11-10 00:08:04','2015-11-10 00:08:01');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(3,'978-616-90280-0-0','การวิเคราะห์และออกแบบระบบเชิงวัตถุด้วย UML','กิตติพงษ์ กลมกล่อม','เคทีพี','2552',388,'290','500',1499,'2015-11-10 00:07:52','2015-11-10 00:07:50');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(4,'978-616-90280-1-7','การพัฒนาระบบเชิงวัตถุด้วย UML','พนิดา พานิชกุล','เคทีพี','2552',374,'280','400',3000,'2015-11-10 00:06:42','2015-11-10 00:06:42');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(5,'978-616-913-701-7','การพัฒนาระบบเชิงวัตถุด้วย UML','พนิดา พานิชกุล','เคทีพี','2552',374,'280','400',3000,'2015-11-10 00:06:42','2015-11-10 00:06:42');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(6,'978-616-996-700-0','การวิเคราะห์และออกแบบระบบเชิงวัตถุด้วย UML','กิตติพงษ์ กลมกล่อม','เคทีพี','2552',388,'290','500',1499,'2015-11-10 00:07:52','2015-11-10 00:07:50');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(7,'978-974-001-360-4','การวิเคราะห์และออกแบบระบบ','กิตติ ภักดีวัฒนะกุล และพนิดา พานิชกุล ','เคทีพี','2551',496,'390','1000',400,'2015-12-03 13:27:28','2015-11-10 00:08:08');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(8,'978-974-06-6220-4','การวิเคราะห์และออกแบบระบบ','กิตติ ภักดีวัฒนะกุล และพนิดา พานิชกุล ','เคทีพี','2551',496,'390','1000',400,'2015-12-03 13:27:28','2015-11-10 00:08:08');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(9,'978-974-06-7357-6','Java เล่ม 1','กิตติ ภักดีวัฒนะกุล','เคทีพี','2551',560,'420','1000',2998,'2015-11-10 00:07:54','2015-11-10 00:07:52');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(10,'978-974-067-357-6','Java เล่ม 2','กิตติ ภักดีวัฒนะกุล','เคทีพี','2551',560,'420','1000',2998,'2015-12-03 15:34:17','2015-11-10 00:07:52');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(11,'978-974-09-4008-1','ภาษาซี ทีละก้าว เล่ม 2','กิตติชัย ชีวาสุขถาวร','เคทีพี','2550',384,'290','600',450,'2015-12-03 15:34:24','2015-11-10 00:07:57');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(12,'978-974-094-008-1','ภาษาซี ทีละก้าว เล่ม 1','กิตติชัย ชีวาสุขถาวร','เคทีพี','2550',384,'290','600',450,'2015-12-03 15:34:34','2015-11-10 00:07:57');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(13,'978-974-372-695-0','ASP.NET 3.5 ด้วย VB 2008 และ C# 2008 ','พิรพร หมุนสนิท และจันทรขจร แซ่อุ๊น','เคทีพี','2552',544,'360','825',797,'2015-11-10 00:08:07','2015-11-10 00:08:05');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(14,'978-974-372-695-8','ASP.NET 3.5 ด้วย VB 2008 และ C# 2008 ','พิรพร หมุนสนิท และจันทรขจร แซ่อุ๊น','เคทีพี','2552',544,'360','825',797,'2015-11-10 00:08:07','2015-11-10 00:08:05');
REPLACE INTO "tbl_book" ("book_id", "isbn", "title", "author", "publisher", "yearpublisher", "page", "price", "weight", "stock", "createUpdate", "createDate") VALUES
	(15,'978-974-8424-74-3','วิศวกรรมซอฟต์แวร์ (Software Engineering)','กิตติ ภักดีวัฒนะกุล และพนิดา พานิชกุล','เคทีพี','2550',390,'390','1000',500,'2015-11-10 00:07:56','2015-11-10 00:07:55');
/*!40000 ALTER TABLE "tbl_book" ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'tbl_role'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_role" (
  "role_id" int(11) NOT NULL AUTO_INCREMENT,
  "role_de_id" int(11) DEFAULT NULL,
  "role_name" varchar(50) DEFAULT NULL,
  "create_date" date DEFAULT NULL,
  PRIMARY KEY ("role_id")
) AUTO_INCREMENT=2;



#
# Dumping data for table 'tbl_role'
#

# No data found.



#
# Table structure for table 'tbl_role_detail'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_role_detail" (
  "role_de_id" int(11) NOT NULL,
  "permission" varchar(256) DEFAULT NULL,
  PRIMARY KEY ("role_de_id")
);



#
# Dumping data for table 'tbl_role_detail'
#

# No data found.



#
# Table structure for table 'tbl_user'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_user" (
  "user_id" int(11) NOT NULL AUTO_INCREMENT,
  "role_id" int(11) NOT NULL,
  "firstname" varchar(100) DEFAULT NULL,
  "lastname" varchar(100) DEFAULT NULL,
  "username" varchar(100) NOT NULL,
  "password" varchar(65) NOT NULL,
  "email" varchar(100) NOT NULL,
  "address" varchar(256) DEFAULT NULL,
  "token" varchar(256) DEFAULT NULL,
  "create_date" date DEFAULT NULL,
  PRIMARY KEY ("user_id","role_id"),
  KEY "fk_user_groups1_idx" ("role_id"),
  CONSTRAINT "fk_user_groups1" FOREIGN KEY ("role_id") REFERENCES "groups" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
) AUTO_INCREMENT=2;



#
# Dumping data for table 'tbl_user'
#

# No data found.

/*!40101 SET SQL_MODE=@OLD_SQL_MODE;*/
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;*/
