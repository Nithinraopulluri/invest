create database referral_subscribers ;
use  referral_subscribers ;
create table mainuserlist (
id INT auto_increment primary key,
date DATE  ,
referral_id VARCHAR(255) ,
trading_view_id VARCHAR(255)  ,

phone_number VARCHAR(20)   ,
email VARCHAR(255)  ,
expiry_date date  ,
remaining_days int  
);
select * from mainuserlist ;
select * from tdemo;
select * from ddemo;

 create table ddemo like mainuserlist;
 create table tdemo like mainuserlist;
 drop table mainuserlist;
 drop table ddemo;
 drop table tdemo;
 create table tpaid (
 id int auto_increment primary key,
 date DATE,
 referral_id varchar(50),
 trading_view_id varchar(50),
 payment_confirm varchar(20),
 comission varchar(20),
 expiry_date DATE,
 phone_number varchar(10),
 email varchar(50),
 plan varchar(50),
 pricing varchar(50),
 remaining_days varchar(50)
 );
 create table dpaid like tpaid;
select * from tpaid;
drop table dpaid;
select * from dpaid;
