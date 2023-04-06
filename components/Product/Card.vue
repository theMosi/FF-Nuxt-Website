<template>
    <div class="box">
                            <div>
                                <div class="img-box">
                                    <img :src="propItem.product.primary_image" alt="">
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        {{ propItem.product.name }}
                                    </h5>
                                    <p>
                                        {{ propItem.product.description }}
                                    </p>
                                    <div class="options">
                                        <h6 v-if="propItem.product.is_sale">
                                            <del>{{numberFormat(propItem.product.price)}}</del>
                                            {{numberFormat(propItem.product.sale_price)}}
                                            <span>تومان</span>
                                        </h6>
                                        <h6 v-else>
                                            {{numberFormat(propItem.product.price)}}
                                            <span>تومان</span>
                                        </h6>

                                        <a href="">
                                            <i class="bi bi-cart-fill text-white fs-5"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>

<script setup>

const propItem = defineProps(['product']);

</script>