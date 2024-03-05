<? $itcSliderItems = get_field('slajdy');// получаем массив изображений
        if ($itcSliderItems) : //проверка на существование?> 
            <div class="main_uslugi_slider">
                <div class="itc-slider" data-slider="itc-slider" data-loop="true" data-autoplay="false">
                    <div class="itc-slider-wrapper">
                        <div class="itc-slider-items">
                            <? foreach ($itcSliderItems as $itcSliderItem) : ?>
                                <? if (count($itcSliderItems) > 1) : //если картинок более 1, то слайдер?>
                                    <div class="itc-slider-item">
                                        <img src="<?= $itcSliderItem['foto']; ?>" alt="" style="align-self: center;">
                                    </div>
                                <? else : //если картинок менее 1, то одиночная картинка?>
                                    <div class="itc-slider-item-one">
                                        <img src="<?= $itcSliderItem['foto']; ?>" alt="" style="align-self: center;">
                                    </div>
                                <? endif; ?>
                            <? endforeach; ?>
                        </div>
                    </div>
                    <? if (count($itcSliderItems) > 1) : //если картинок более 1, то отображать стрелки навигации?>
                        <button class="itc-slider-btn itc-slider-btn-prev"></button>
                        <button class="itc-slider-btn itc-slider-btn-next"></button>
                    <? endif; ?>
                </div>
            </div>
        <? endif; ?>