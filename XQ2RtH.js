window.reloadPage = () =>null

window.TEST = [];
const g = JSON.stringify;
JSON.stringify = function (u) {
window.TEST.push(u);
if (u.data) {
if (u.data.levelToRedeem)u.data.levelToRedeem = "L300"
}
if (u.itemsOwned) {
window.TEST1 = u;
u.uncommonTokens = u.epicTokens = u.rareTokens = u.characterTokens = u.coins = u.gems = u.xp = 10000000;
u.unlockedKartWheels = true
u.itemsOwned = "a202_srdosivd-h155_ydiockjh-h162_fukjvmnb-h167_gubdmbn-t115_aikchmvb-t120_ayhcndjf-t122_atchdgfb-t135_aijcnhtg-t126_ayhcefdv-t130_cujkvmdh-a107_zqtcgsdp-t159_oobfda-a123_qdjcyhfg-t141_iokmhydg-t154_lksfrenc-t156_tfcgnmjk-h176_aiskchfg-t149_mnghsncb-t150_ycgbdnmz-t151_auikjhfb-t152_ytdcvkmn-h186_icklvsda-a132_tgfvcbde-t181_cikvmdye-h191_tdrlovfg-h189_oijhftgc-t191_ikchgdnb-t192_polkghds-t193_cuivkmds-t197_cstgfhvnb-h198_rdtfvhbn-t217_ychfnbsf-t199_clmnvgfh-a165_afvbghnn-t234_xyldkwhk-t239_dtcygtnf-t224_aduchfnn-t260_ldkvedmj-t266_stsvwjnj-t273_eembmqek-t280_ruhwtfti-t281_gmnxghzv-t301_wiiovolz-t302_dpogdaed-t306_cmndtrgf-t307_cikmfvbn-a196_qmzgvozv-a201_vnbsgxde-a209_tdqmirfp-t323_iasrqhuy-t327_xwfvaapi-t331_nsbtewoh-t332_cwkrtcog-t334_qphxfpaq-h147_rfolivjg-h164_abolnmjh-h169_aycglmnv-t114_ujfhcnfh-t118_sudjgmbn-t127_auickmfn-h163_dujvmnm-a104_aikychgf-h184_hjvksuva-h185_qkciucs-t128_dioclkjf-t158_ikhgdbcn-a112_wtdgshxb-a111_aolcmdjf-a109_polctags-a125_alkmnced-t180_auiftchd-h192_vogkmthr-a137_cmvjgbiru-a144_cujgmnbvd-h197_cujfmdgf-h196_asctvmm-a124_icmfhgdr-t190_ikjhnbgf-t189_cujhgtrfs-a151_cakijhyg-t212_cuhdgebe-t218_cjfvnssh-t214_ajdychg-t209_fkjhgbna-t212_cikvlnmn-t205_wecnvhfd-h201_ascsswq-a166_cujbmnff-t235_ptidpznc-t220_cuytsghf-t241_wosjsrit-t246_evfrjjdj-t228_lkcmnfhb-t250_ncgpmzgn-h206_oofhwnd-a175_ajgkvuzk-a176_btrjrrq-a177_infksagc-t258_vftlspbj-t263_oecdwgpa-t265_yetvwvbx-t276_kdmkrpph-h208_plsgfhbd-h216_lamnedgh-t284_hznbhmnd-t289_uljollgs-h221_ywljltmd-t304_cjftgqsa-t305_clokgnme-t303_qzdttein-t285_qxslzcfe-a200_clsfdver-a203_pybtbtjz-a203_yeyagaat-t320_cqusozvs-t324_zotzfzpg-h224_colkfhyg-a207_qsnfjbzq-t322_tomjgztz-a99_svybrwjd-t136_uytcnvhj-t132_aiclmnqw-t133_ytwsgfdc-h173_lkcmhfnv-a117_poljhasd-t143_qapocils-a136_wychfgdl-a114_recnvhsd-t216_aolctffa-h200_drcgfolk-t236_ieyysadp-t231_cyhfngbc-t253_imucacwk-w47_cvydtgga-p50_cjmfgbedf-h219_phnjdbhp-t308_clkfnqps-a201_xhlwgdxl-h223_fjkgmvnb-h165_audchfbd-h172_acmnvthd-a87_cmvhfntr-a106_aclkjmuc-a110_aiucjfsd-a131_ajgfwudy-a148_cyhdjqqsx-a164_cijhfygh-a160_amnchfnb-c153_njfhqfvd-a191_muqtdxoy-a199_xopipuhv-h155_ydiockjh-h162_fukjvmnb-h167_gubdmbn-t115_aikchmvb-t120_ayhcndjf-t122_atchdgfb-t135_aijcnhtg-t126_ayhcefdv-t130_cujkvmdh-a107_zqtcgsdp-a123_qdjcyhfg-t141_iokmhydg-t154_lksfrenc-t156_tfcgnmjk-h176_aiskchfg-t149_mnghsncb-t150_ycgbdnmz-t151_auikjhfb-t152_ytdcvkmn-t159_oobfda-h186_icklvsda-a132_tgfvcbde-t181_cikvmdye-h191_tdrlovfg-h189_oijhftgc-t191_ikchgdnb-t192_polkghds-t193_cuivkmds-t197_cstgfhvnb-h198_rdtfvhbn-t217_ychfnbsf-t199_clmnvgfh-a165_afvbghnn-t234_xyldkwhk-t239_dtcygtnf-t224_aduchfnn-t260_ldkvedmj-t266_stsvwjnj-t273_eembmqek-t280_ruhwtfti-t281_gmnxghzv-t301_wiiovolz-t302_dpogdaed-t306_cmndtrgf-t307_cikmfvbn-a196_qmzgvozv-a201_vnbsgxde-a209_tdqmirfp-t323_iasrqhuy-t327_xwfvaapi-t331_nsbtewoh-t332_cwkrtcog-t334_qphxfpaq-a208_qesmyicg-a200_ocjnvryj-t321_wqirxmfq-c168_clkhfnbv-w60_jcvmsdfd-p61_ychgjreb-w62_cjvkmgdg-c169_cjgmnfhd-"
}
return g(...arguments);
}


