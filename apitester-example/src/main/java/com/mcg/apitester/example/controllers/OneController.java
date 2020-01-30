package com.mcg.apitester.example.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mcg.apitester.api.annotations.ApiDescription;
import com.mcg.apitester.api.annotations.ApiError;
import com.mcg.apitester.api.annotations.ApiErrors;
import com.mcg.apitester.example.entities.AnEnumeration;
import com.mcg.apitester.example.entities.OneEntity;

@RestController
@RequestMapping(value="/api")
@ApiDescription(file="/com/mcg/apitester/example/controllers/OneController.md")
public class OneController extends BaseController {

	@RequestMapping(value="/one/entities",method=RequestMethod.GET)
	public List<OneEntity> list(
			@RequestParam String x, 
			@RequestParam String y, 
			@RequestParam @ApiDescription("Example for description + enumeration values") AnEnumeration enumeration,
			@RequestParam(required=false) @ApiDescription("Time filter: Items created after fromDate, of type timestamp") Date fromDate,
			@RequestParam @ApiDescription("Pagination: The offset") int offset, 
			@RequestParam @ApiDescription("Pagination: The maximum number of entries per page") int max, 
			@RequestParam @ApiDescription("The field to order by. One of 'name', 'date' or 'size'") String[] orderBy) {
		ArrayList<OneEntity> arrayList = new ArrayList<OneEntity>();
		arrayList.add(create(OneEntity.class));
		
		return arrayList;
	}
	
	@RequestMapping(value="/one/entities",method=RequestMethod.OPTIONS)
	public void permissions(HttpServletResponse response) {
		response.setHeader("Allowed-Methods", "PUT,POST,PATCH");
	}

	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.GET)
	public @ApiDescription(file="/com/mcg/apitester/example/entities/OneEntity.md") OneEntity get(
			@PathVariable @ApiDescription("The ID of the entity to read") String id, 
			@RequestParam String y, 
			@RequestParam int offset, 
			@RequestParam int max, 
			@RequestParam String orderBy) {
		return create(OneEntity.class);
	}
	
	@ApiDescription(file="/com/mcg/apitester/example/controllers/OneController_create.md")
	@RequestMapping(value="/one/entities",method=RequestMethod.POST)
	public OneEntity create(HttpServletResponse response, @RequestBody OneEntity body) {
		response.setHeader("X-this-is-a-very-ugly-response-header-because", "thevalueisfartoolongaeh1Phahs4vae8ohsh3aiMeeX3IezoHuk0AiXiaKei3da7Za7eex9Oo5kaek5Eim7achai3xah2Koo3shethiequeipaeTheipaixoo5Ohlazaing1piezae2aeQuaisahx8peiNgephoh6EiYeeth8saeXohvai4Wee1ve4nohghohvi3shu0ahnaereemae4Nooti7ueTeiridohnee6uquaag7phu0oosoh2cheep4geiSh8ev6Oor9ingeiyaeHaezaifieshooDe5ish0TooseBioka0vai2eec2baimaibooPhiob2ko7haibei0iec7uoseez6geif2cuoFeeZuvei6na8thae3ool7oow8zaedooQu7Vu9Kah8eineiluqu1eidi5ahChoo9ucae9Aje2oopahcie8Jiesheiwae2cho9jahSuch3jaewiequie0feew8ieb7fah1aimu1Ay6Aice8aePhah8mohNg0ooKeiz7Cooqu2eewaegeiboapeiG8aik3eeC0Aeshai2oes2ooh1onuofiephei3zeipeeraed6Aeveish2Je1Quohruapuang7Eix4oojaequiighoa2aiLaePeedie7ahKahs0mei6UQuael0uneequiechuath6ahSevoochei4gush8xail5fohkoohieyeih2hi4eey1Sengoepheikah2keetago9ju5ea1Eedosaih9ahnootozahneih2soh8ahsh0oogham2Pheike8sheyo0EeJ2Aijah5oonee1aing4aitee2liesaengohP4ugieVaid8bieteid6Eechoh2ahquait8chiphie3diexie6bau9Oocieca5the6eiwaeJahngeetaev5yohfoodethae5ohQu0shei9lae4raetae0thoazeubo7xooNaicielahghe9Oojoonge6eiw8haGhiey5cheeDohpiungu4chahjahpheex4paing8cahDohta1tieth6eib2Ix6eew0eesh1ohjohroo3EeDahsh8ahjoaw3ta5ieni7phahk9leeLohR0qua3Roo1jook2aB3ThuRaeShie0viepoo5eig3Vuluulei9tie4quak5pheemathoGee4eiJiolohCeim3vie3xaWie0geequah2Chiewoogh1deeSoc4Caidai5joh1quekahc2hae4xocheekah9ahn8aeG2cuolahgh0gauz2Jush0uchaith1roh8emequeeC0Vie7aey8ohbaeveikong9ech4paeng8AhWai6waiweithohjae9xe0kainoh3ide3nei6viesaeshohpeeQueenu2thohLu0eish3xaingohcha7cadei7boo4amohr0reem5ec4Vauk9Kiarisohhohd2Pafoh1anahphohNae0jao5Eishie6lee3aewoofuPhineNg0nah6iePhoosh5Iengigh3shoht2yohx6ooVeeya1ooquahQuae3mee2Ienahz7uu2aecoa3ohnahchooph8zooZi2esahpaeyooz0aeyohth9quieg8wivi6vi8vohPaemoocohnguemeir6gee2ePuiZoosh3moh8heeyah4dahph1yineeHour3va4ieh7zietheisaetin2zohjaequo2eithoogamei3Baetha1et0chei3luxoeThit0Ahd4dan1shoogei7Ii2aisumai9aethahrengooqu7ookosh6taeghie6ab9auWewaiTe7aithooniesh2aix8queengaezaeSei8ooxeng0GaiZieHa4etiicahmeeghei7ow4tus9oocaeThaiNei7EiVoe8iey1IejohQu3Auhash2mo4EiMeadeif0Rioboo0Ohjai7yui2voh0aeK1ooKah7ieH8doga0Jao1sil4gaph1Ienohset1Chah");
		return create(OneEntity.class);
	}
	
	
	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.PUT)
	public OneEntity update(@PathVariable String id, @RequestBody OneEntity body) {
		return create(OneEntity.class);
	}
	
	@RequestMapping(value="/one/counter",method=RequestMethod.GET)
	public Map update(@RequestParam String[] in) {
		Map<String,Object> out = new HashMap<>(); 
		out.put("count", in.length);
		return out;
	}
	
	@ApiErrors(
			{
				@ApiError(value=HttpStatus.CONFLICT,description="If the entity could not be deleted because another entity depends on it")
			})
	@ResponseStatus(code=HttpStatus.NO_CONTENT)
	@RequestMapping(value="/one/entities/{id}",method=RequestMethod.DELETE)
	public void delete(@PathVariable String id) {
	}
	
	
}
