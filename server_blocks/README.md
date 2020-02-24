# server_blocks

- create 2 folders to save website sources

```sh
$ sudo mkdir -p /var/www/cat
$ sudo mkdir -p /var/www/fish
```

- create html file for 2 /var/www/cat & /var/www/fish folders

+ [for /var/www/cat](./virtual_hosts/cat/index.html)
+ [for /var/www/fish](./virtual_hosts/fish/index.html)

- create server blocks file for every domain

```sh
$ touch /etc/nginx/sites-available/cat.conf
$ touch /etc/nginx/sites-available/fish.conf
```

+ [cat.conf](./virtual_hosts/cat/cat.conf)
+ [fish.conf](./virtual_hosts/fish/fish.conf)

- symbolic link to /etc/nginx/sites-enabled/

```sh
$ sudo ln -s /etc/nginx/sites-available/cat.conf /etc/nginx/sites-enabled/cat.conf
$ sudo ln -s /etc/nginx/sites-available/fish.conf /etc/nginx/sites-enabled/fish.conf
```

- reload nginx

```sh
$ sudo systemctl reload nginx
```

- update /etc/hosts file

```sh
$ sudo nano /etc/hosts
```

**Add virtual host**

```conf
127.0.0.1       cat.animal
127.0.0.1       www.cat.animal
127.0.0.1       fish.animal
127.0.0.1       www.fish.animal

```


### document

[Hướng dẫn cấu hình Virtual Hosts trên Nginx](https://vinasupport.com/huong-dan-cau-hinh-virtual-hosts-tren-nginx/)
