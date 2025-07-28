create database daily_demo ;
use  daily_demo ;
create table demo_subscribers (
id INT auto_increment primary key,
date DATE  ,
referral_id VARCHAR(255) ,
trading_view_id VARCHAR(255)  ,
expiry_date date  ,
phone_number VARCHAR(20)   ,
email VARCHAR(255)  ,
remaining_days int  
);
select * from demo_subscribers ;
drop table demo_subscribers ;
create table tdemo_subscribers (
id INT auto_increment primary key,
date DATE  ,
referral_id VARCHAR(255) ,
trading_view_id VARCHAR(255)  ,
expiry_date date  ,
phone_number VARCHAR(20)   ,
email VARCHAR(255)  ,
remaining_days int  
);
select * from tdemo_subscribers ;
