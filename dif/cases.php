<header class="cases__header page-header">

	<?
		$title = __('Все практики','szplaw');
		$tax_query = $case_id = "";
		$counter = wp_count_posts("case")->publish;

		if(get_queried_object()->term_id  ):
			$title = get_queried_object()->name;
			$tax_query = [
				[
					'taxonomy' => 'case_type',
					'terms'    => get_queried_object()->term_id,
					]
				];
      $counter = get_queried_object()->count;
		endif;
    if(is_single()) {
      $case_id = $post->ID;
      $title = get_the_terms($case_id, 'case_type' )[0]->name;
    }
	?>
	<h1 <? if(strlen(get_the_title())>40) echo 'class="long-title"' ?>>
		<? echo $title ?>
	</h1>
</header>
<section class="cases-columns">
	<div
		class="cases-column cases-column--left js-sticky-sidebar"
		data-sticky-min-width="640"
	>
		<div class="cases-categories">
		  <h3 class="text-primary">Практики</h3>

		  <ul class="cases-categories__list">
				<li class="cases-category <?
					if($post->ID == 15) {
						echo 'is-active';
					}
				 ?>">
				 <a href="<? echo get_the_permalink(15) ?>">
					<?  _e('Все практики','szplaw')  ?>
				</a>
				</li>
		    <?
		    $types = get_terms('case_type', 'orderby=slug&order=ASC');

		      foreach ( $types  as $type ) {
		        ?>
		        <li class="cases-category <?
		        if($title == $type->name) {
		          echo 'is-active';
		        }
		         ?>">
		          <a href="<? echo get_term_link($type->term_id) ?>">
		            <?  print_r($type->name)  ?>
		          </a>
		        </li>
		        <?
		      }
		     ?>
		  </ul>
		</div>
	</div>
	<div class="cases-column cases-column--right">
		<div
			data-query='<?
			echo json_encode([
				'post_type' => 'case',
				'tax_query' => $tax_query,
				'post_status' => 'publish',
				'p' => $case_id,
				'orderby' => 'menu_order',
				'order'   => 'ASC',
				'posts_per_page' => 4,
				'paged'=>1
			]) ?>'
			class="cases-list js-ajax-cases"
			style="counter-reset: cases-counter <? echo $counter + 1; ?>;"
		>
		</div>
	</div>
</section>
