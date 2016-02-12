plugin.tx_contentdesigner = USER
plugin.tx_contentdesigner {
    userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
    pluginName = Pi1
    extensionName = ContentDesigner
    controller = ContentRenderer
    vendorName = KERN23
    action = show
    switchableControllerActions.ContentRenderer.1 = show

    features {
        rewrittenPropertyMapper = 1
    }

    settings {
        disableDefaultDrawItem = 0

        renderObj = COA
        renderObj.10 < tt_content.header

        ## Manually set the TCA fields that are shown for your element
        #tca = --palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,,--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.header;header,pi_flexform;;;;1-1-1,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.textlayout;textlayout,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.extended,tx_gridelements_container,tx_gridelements_columns

        ## Alternatively (if "tca" is empty) you can copy it from another tt_content CType
        ## by default that is used since 2.6.0
        #tcaFromType = header
        #tcaFromTypePosition = after:header
    }
}

pages.tx_contentdesigner_flexform.settings.tca = --div--;LLL:EXT:frontend/Resources/Private/Language/locallang_tca.xlf:pages.tabs.extended,tx_contentdesigner_flexform

module.tx_contentdesigner.manualExplicitAllowDeny {
    # Example to manually add contentdesigner keys to the BE Group explicit allow/deny field list.
    # This is usefull if you're not defining your CD Elements in the ROOT TypoScript Template and
    # in the BE Group configuration they aren't visible

    #tx_contentdesigner_blubah = Blubber
    #tx_contentdesigner_blahblub = Bla Blub
}