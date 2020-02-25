# nginx

> nginx for zero to hero

### các lệnh cần thiết để quản lý

- kiểm tra cú pháp file cấu hình

```sh
$ sudo nginx -t
```

- reload lại file cấu hình

```sh
$ sudo nginx -s reload
```

- mở file log

```sh
$ sudo nginx -s reopen
```

### danh sách file và thư mục quan trọng

- /etc/nginx/nginx.conf: file config chính
- /etc/nginx/conf.d: thư mục chưa các file config của riêng bạn
- /etc/nginx/sites-available: thư mục chưa các file config VirtualHost, cho phép chúng ta cấu hình riêng biệt cho từng website
- /etc/nginx/sites-available/default: file config Virtual Hosts mặc định

### documents

- [installation](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04)
- [Nginx Tutorial](https://www.devdungeon.com/content/nginx-tutorial)
- [Nginx Tutorial Step by Step with Examples](https://knockdata.github.io/Nginx-Tutorial-Step-by-Step-with-Examples/)
- [An Introduction to NGINX for Developers](https://medium.com/free-code-camp/an-introduction-to-nginx-for-developers-62179b6a458f)
- [Nginx là gì? Cài đặt và cấu hình Nginx Web Server](https://vinasupport.com/nginx-la-gi-cai-dat-va-cau-hinh-nginx-web-server/)
- [Hướng dẫn cấu hình Virtual Hosts trên Nginx](https://vinasupport.com/huong-dan-cau-hinh-virtual-hosts-tren-nginx/)
- [nginx from vinasupport.com](https://vinasupport.com/web-server/nginx/)
