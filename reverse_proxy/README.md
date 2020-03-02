```sh
$ sudo nano /etc/nginx/sites-available/app.conf
$ sudo ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf
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
