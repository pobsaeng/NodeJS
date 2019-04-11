# HeidiSQL Dump 
#
# --------------------------------------------------------
# Host:                         localhost
# Database:                     node_db
# Server version:               5.7.18-log
# Server OS:                    Win64
# Target compatibility:         ANSI SQL
# HeidiSQL version:             4.0
# Date/time:                    2017-12-19 00:40:40
# --------------------------------------------------------

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ANSI,NO_BACKSLASH_ESCAPES';*/
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;*/


#
# Database structure for database 'node_db'
#

CREATE DATABASE /*!32312 IF NOT EXISTS*/ "node_db" /*!40100 DEFAULT CHARACTER SET utf8 */;

USE "node_db";


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
# Table structure for table 'tbl_category'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_category" (
  "category_id" int(11) NOT NULL AUTO_INCREMENT,
  "category_name" varchar(100) DEFAULT NULL,
  PRIMARY KEY ("category_id")
);



#
# Dumping data for table 'tbl_category'
#

# No data found.



#
# Table structure for table 'tbl_customer'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_customer" (
  "customer_id" int(11) NOT NULL AUTO_INCREMENT,
  "fullfame" varchar(100) DEFAULT NULL,
  "sex" varchar(1) DEFAULT NULL,
  "idcard" varchar(17) DEFAULT NULL,
  "address" varchar(250) DEFAULT NULL,
  "province_id" varchar(2) DEFAULT NULL,
  "telephone" varchar(100) DEFAULT NULL,
  "customer_picture" tinyblob,
  PRIMARY KEY ("customer_id")
);



#
# Dumping data for table 'tbl_customer'
#

# No data found.



#
# Table structure for table 'tbl_order'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_order" (
  "order_id" int(11) NOT NULL AUTO_INCREMENT,
  "supplier_id" int(11) DEFAULT NULL,
  "po_no" varchar(15) DEFAULT NULL,
  "order_date" datetime DEFAULT NULL,
  "receive_date" datetime DEFAULT NULL,
  "paid_date" datetime DEFAULT NULL,
  "net_dc" double DEFAULT NULL,
  "vat_rate" double DEFAULT NULL,
  "net_vat" double DEFAULT NULL,
  "net" double DEFAULT NULL,
  "is_received_all" varchar(1) DEFAULT NULL,
  "is_paid" varchar(1) DEFAULT NULL,
  "is_normal" varchar(1) DEFAULT NULL,
  "order_by" varchar(16) DEFAULT NULL,
  "received_by" varchar(16) DEFAULT NULL,
  "paid_by" varchar(16) DEFAULT NULL,
  PRIMARY KEY ("order_id")
);



#
# Dumping data for table 'tbl_order'
#

# No data found.



#
# Table structure for table 'tbl_order_detail'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_order_detail" (
  "order_id" int(11) NOT NULL,
  "product_id" int(11) NOT NULL,
  "number_to_order" int(11) DEFAULT NULL,
  "unit_id" varchar(4) DEFAULT NULL,
  "number_to_received" int(11) DEFAULT NULL,
  "cost" double DEFAULT NULL,
  "discount_per_unit" double DEFAULT NULL,
  "total_discount" double DEFAULT NULL,
  "total" double DEFAULT NULL,
  "is_received_all" varchar(1) DEFAULT NULL,
  PRIMARY KEY ("product_id","order_id")
);



#
# Dumping data for table 'tbl_order_detail'
#

# No data found.



#
# Table structure for table 'tbl_product'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_product" (
  "product_id" int(11) NOT NULL AUTO_INCREMENT,
  "product_name" varchar(100) DEFAULT NULL,
  "supplier_id" int(11) DEFAULT NULL,
  "category_id" int(11) DEFAULT NULL,
  "last_cost" double DEFAULT NULL,
  "cost_avg" double DEFAULT NULL,
  "sale_price" double DEFAULT NULL,
  "product_status" varchar(1) DEFAULT NULL,
  PRIMARY KEY ("product_id")
) AUTO_INCREMENT=6;



#
# Dumping data for table 'tbl_product'
#

LOCK TABLES "tbl_product" WRITE;
/*!40000 ALTER TABLE "tbl_product" DISABLE KEYS;*/
REPLACE INTO "tbl_product" ("product_id", "product_name", "supplier_id", "category_id", "last_cost", "cost_avg", "sale_price", "product_status") VALUES
	(1,'Java',1,2,'200.5','200.5','250.5','1');
REPLACE INTO "tbl_product" ("product_id", "product_name", "supplier_id", "category_id", "last_cost", "cost_avg", "sale_price", "product_status") VALUES
	(2,'Node.JS',11220,20123,'500','500','690','1');
REPLACE INTO "tbl_product" ("product_id", "product_name", "supplier_id", "category_id", "last_cost", "cost_avg", "sale_price", "product_status") VALUES
	(3,'Node.JS',11220,20123,'500','500','690','1');
REPLACE INTO "tbl_product" ("product_id", "product_name", "supplier_id", "category_id", "last_cost", "cost_avg", "sale_price", "product_status") VALUES
	(4,'Node.JS',11220,20123,'500','500','690','1');
REPLACE INTO "tbl_product" ("product_id", "product_name", "supplier_id", "category_id", "last_cost", "cost_avg", "sale_price", "product_status") VALUES
	(5,'Node.JS',11220,20123,'500','500','690','1');
/*!40000 ALTER TABLE "tbl_product" ENABLE KEYS;*/
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
) AUTO_INCREMENT=3;



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

LOCK TABLES "tbl_role_detail" WRITE;
/*!40000 ALTER TABLE "tbl_role_detail" DISABLE KEYS;*/
REPLACE INTO "tbl_role_detail" ("role_de_id", "permission") VALUES
	(2,'INSERT,UPDATE,DELETE,PUT');
/*!40000 ALTER TABLE "tbl_role_detail" ENABLE KEYS;*/
UNLOCK TABLES;


#
# Table structure for table 'tbl_sale'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_sale" (
  "sale_id" int(11) NOT NULL AUTO_INCREMENT,
  "customer_id" int(11) DEFAULT NULL,
  "sale_date" datetime DEFAULT NULL,
  "net_dc_by_sale" double DEFAULT NULL,
  "net_vat" double DEFAULT NULL,
  "net_total" double DEFAULT NULL,
  "net_paid_to_supplier" double DEFAULT NULL,
  "net_me_received" double DEFAULT NULL,
  "sale_by" varchar(16) DEFAULT NULL,
  PRIMARY KEY ("sale_id")
);



#
# Dumping data for table 'tbl_sale'
#

# No data found.



#
# Table structure for table 'tbl_sale_detail'
#

CREATE TABLE /*!32312 IF NOT EXISTS*/ "tbl_sale_detail" (
  "sale_id" int(11) NOT NULL,
  "product_id" int(11) NOT NULL,
  "amount" int(11) DEFAULT NULL,
  "sale_price" double DEFAULT NULL,
  "dc_by_member" double DEFAULT NULL,
  "dc_by_sale" double DEFAULT NULL,
  "vat" double DEFAULT NULL,
  "total" double DEFAULT NULL,
  "paid_to_supplier" double DEFAULT NULL,
  "me_received" double DEFAULT NULL,
  "is_paid" varchar(1) DEFAULT NULL,
  PRIMARY KEY ("sale_id","product_id")
);



#
# Dumping data for table 'tbl_sale_detail'
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
  PRIMARY KEY ("user_id","role_id")
) AUTO_INCREMENT=3;



#
# Dumping data for table 'tbl_user'
#

LOCK TABLES "tbl_user" WRITE;
/*!40000 ALTER TABLE "tbl_user" DISABLE KEYS;*/
REPLACE INTO "tbl_user" ("user_id", "role_id", "firstname", "lastname", "username", "password", "email", "address", "token", "create_date") VALUES
	(2,2,'Kraipob','Saengkhunthod','pob@gmail.com','1234','pob@gmail.com','Phathai','991201','2017-12-18');
/*!40000 ALTER TABLE "tbl_user" ENABLE KEYS;*/
UNLOCK TABLES;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE;*/
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;*/
