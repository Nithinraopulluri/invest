create database mainsubscriber;
use mainsubscriber;
create table mlist (
id INT auto_increment primary key,
indicator_name varchar(255),
date DATE  ,
trading_view_id VARCHAR(255),
referral_id VARCHAR(255) ,
plan varchar(255) ,
expiry_date date  ,
remaining_days int  
);
select * from mlist;
select * from demolist;
select * from dlist;
drop table demolist;
drop table mlist;

 create table dlist like mlist;
create table demolist (
id INT auto_increment primary key,
date DATE  ,
trading_view_id VARCHAR(255),
referral_id VARCHAR(255) ,
plan varchar(255) ,
expiry_date date  ,
remaining_days int  
);