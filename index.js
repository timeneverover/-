$(document).ready(function(){
	if (isIOS > 0) {
                    $('.inputHidden').css("font-size", 0);
                } else {
                    $('.newpay_identify_code input').width("87%");
                }
                $('.pure-u-1-4 input').height($('.pure-u-1-4 input').width() * 0.85);
                var key = {
                    48: 0,
                    49: 1,
                    50: 2,
                    51: 3,
                    52: 4,
                    53: 5,
                    54: 6,
                    55: 7,
                    56: 8,
                    57: 9
                };

                var input1 = $('.newpay_scanpay_input1');
                var input2 = $('.newpay_scanpay_input2');
                var input3 = $('.newpay_scanpay_input3');
                var input4 = $('.newpay_scanpay_input4');
                $(document).keypress(function(event) {
                    var keycode = event.which;
                    if (keycode > 47 && keycode < 58) {
                        if (input1.val() == '') {
                            input1.val(key[keycode]);
                        } else if (input2.val() == '') {
                            input2.val(key[keycode]);
                            input2.addClass('onfocus');
                        } else if (input3.val() == '') {
                            input3.val(key[keycode]);
                            input3.addClass('onfocus');
                        } else if (input4.val() == '') {
                            input4.val(key[keycode]);
                            input4.addClass('onfocus');
                            $('.newpay_scanpay .btn-confirm').removeClass('btn-confirm-disable').addClass('btn-primary');
                            $('.newpay_scanpay .btn-primary.btn-large').click(function() {
                                $('.scanpay_reminder').show();
                                $(this).removeClass('btn-primary').addClass('btn-confirm-disable').text("查询中...");
                                $(this).unbind("click");
                                $('.inputHidden').val('')
                            })
                        }
                    }
                })
                if (isAndroid > 0 && !isAlipay) {
                    $(document).keyup(function(evevt) {
                        inputHiddenVal = $('.inputHidden').val();
                        var keycode = event.which;
                        var lastVal = inputHiddenVal.substr(inputHiddenVal.length - 1, 1);
                        if (keycode != 8) {
                            if (input1.val() == '') {
                                input1.val(lastVal);
                            } else if (input2.val() == '') {
                                input2.val(lastVal);
                                input2.addClass('onfocus');
                            } else if (input3.val() == '') {
                                input3.val(lastVal);
                                input3.addClass('onfocus');
                            } else if (input4.val() == '') {
                                input4.val(lastVal);
                                input4.addClass('onfocus');
                                $('.newpay_scanpay .btn-confirm').removeClass('btn-confirm-disable').addClass('btn-primary');
                                $('.newpay_scanpay .btn-primary.btn-large').click(function() {
                                    $('.scanpay_reminder').show();
                                    $(this).removeClass('btn-primary').addClass('btn-confirm-disable').text("查询中...");
                                    $(this).unbind("click");
                                    $('.inputHidden').val('')
                                })
                            }
                        }
                    })
                }

                $(document).keydown(function(event) {
                    var keycode = event.which;
                    if (keycode == 8) {
                        if (input4.val() != '') {
                            input4.val("");
                            input4.removeClass('onfocus');
                            $('.newpay_scanpay .btn-confirm').removeClass('btn-primary').addClass('btn-confirm-disable');
                        } else if (input3.val() != '') {
                            input3.val("");
                            input3.removeClass('onfocus');
                        } else if (input2.val() != '') {
                            input2.val("");
                            input2.removeClass('onfocus');
                        } else if (input1.val() != '') {
                            input1.val("");
                        }
                    }
                })

})
