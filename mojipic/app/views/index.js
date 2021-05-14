
import $ from 'jquery';
import 'materialize-css';
import Dropzone from 'dropzone';
import React from 'react';
import ReactDOM from 'react-dom';

// Dropzoneのドラッグ＆ドロップエリアの設定
Dropzone.options.filedropzone = {
    paramName: 'file',
    maxFilesize: 2, //MB
    dictDefaultMessage: '',
    thumbnailHeight: 200,
    thumbnailWidth: 200,
    init: function () {
        this.on('addedfile', function (file) {
            $('#overlaytext').val($('#overlaytext-shown').val());
            $('#overlaytextsize').val($('#overlaytextsize-shown').val());
        });
    },
    accept: function (file, done) {
        done();
        $('.dz-details').remove();
        $('.dz-progress').remove();
        $('.dz-error-message').remove();
        $('.dz-success-mark').remove();
        $('.dz-error-mark').remove();
    }
};

// Materializedの設定
$(function () {
    // Materialized Menu
    $('.button-collapse').sideNav();
}); // end of document ready