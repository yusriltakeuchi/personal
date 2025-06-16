# Gunakan nginx ringan berbasis Alpine
FROM nginx:alpine

# Hapus default static file bawaan image nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy seluruh isi project (karena semua file Anda memang di root folder)
COPY . /usr/share/nginx/html/

# Expose port internal nginx
EXPOSE 80
