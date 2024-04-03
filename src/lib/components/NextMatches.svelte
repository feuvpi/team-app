<script lang='ts'>
    // Import necessary modules
    import { onMount } from 'svelte';
  
    // Mockup data for team's next matches
    let nextMatches = [
      { opponent: 'Bahia de Feira', date: '2024-04-05', time: '15:00', location: 'Estadio A' },
      { opponent: 'Salvador FC', date: '2024-04-08', time: '18:30', location: 'Estadio B' },
      { opponent: 'Galicia', date: '2024-04-12', time: '12:00', location: 'Estadio C' }
    ];
  
    // Function to format date
    function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
  
    // Function to handle displaying team's next matches
    function displayNextMatches() {
      return nextMatches.map(match => ({
        opponent: match.opponent,
        data: `${formatDate(match.date)} at ${match.time}`,
        location: match.location
      }));
    }
  
    // Lifecycle hook to fetch data
    onMount(() => {
      // Here you can fetch actual data from an API
      // or perform any other necessary initialization
    });
  </script>
  
  <!-- Svelte component markup -->
  <div class="w-full sm:w-1/2 xl:w-1/3">
    <div class="mb-4">
      <div class="shadow-lg rounded-2xl p-4 bg-white w-full">
        <p class="font-bold text-md text-black">Proximos Jogos</p>
        <ul>
          {#each displayNextMatches() as { opponent, data, location }}
            <li class="flex items-center my-6 space-x-2">
              <!-- <span class="block relative"> -->
                <!-- You can replace this image with the team's logo -->
                <!-- <img alt="{opponent}" src="/images/team_logo.jpg" class="mx-auto object-cover rounded-full h-10 w-10" /> -->
              <!-- </span> -->
              <div class="flex flex-col">
                <span class="text-sm text-gray-900 font-semibold ml-2">{opponent}</span>
                <span class="text-sm text-gray-400 ml-2">{data} - {location}</span>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  