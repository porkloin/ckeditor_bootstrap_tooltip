<?php

namespace Drupal\ckeditor_bootstrap_tooltip\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "CKEditorBootstrapTooltip" plugin.
 *
 * @CKEditorPlugin(
 *   id = "bootstrap_tooltip",
 *   label = @Translation("CKEditorBootstrapTooltip"),
 *   module = "ckeditor_bootstrap_tooltip"
 * )
 */
class CKEditorBootstrapTooltip extends CKEditorPluginBase {

  /**
   * Implements \Drupal\ckeditor\Plugin\CKEditorPluginInterface::getFile().
   */
  public function getFile() {
    return '/modules/ckeditor_bootstrap_tooltip/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function isInternal() {
    return FALSE;
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    return array(
      'bootstrap_tooltip' => array(
        'label' => t('Add Tooltip'),
        'image' => '/modules/ckeditor_bootstrap_tooltip/icons/tooltip.png',
      ),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array();
  }

}
